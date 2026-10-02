from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware

from graph import graph

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.websocket("/ws/chat")
async def websocket_chat(websocket: WebSocket):

    await websocket.accept()

    print("WebSocket connected")

    try:

        while True:

            data = await websocket.receive_json()

            user_message = data.get("message", "")
            history = data.get("history", [])

            if not user_message.strip():
                continue

            messages = []

            for msg in history:

                messages.append({
                    "role": msg["role"],
                    "content": msg["content"]
                })

            messages.append({
                "role": "user",
                "content": user_message
            })


            print(f"User: {user_message}")

            await websocket.send_json({
                "type": "start"
            })

            try:
                async for event in graph.astream(
                    {
                        "messages": messages
                    },
                    stream_mode="messages",
                ):

                    message_chunk, metadata = event

                    if metadata.get("langgraph_node") != "agent":
                        continue

                    content = message_chunk.content

                    if not content:
                        continue

                    if isinstance(content, str):

                        await websocket.send_json({
                            "type": "token",
                            "content": content
                        })


                await websocket.send_json({
                    "type": "done"
                })


                print("Graph completed")


            except WebSocketDisconnect:

                print(
                    "Client disconnected while streaming"
                )

                break


            except Exception as e:

                print(
                    "Graph error:",
                    repr(e)
                )

                try:

                    await websocket.send_json({
                        "type": "error",
                        "content": str(e)
                    })

                except (WebSocketDisconnect, RuntimeError):

                    print(
                        "Could not send error: "
                        "WebSocket already closed"
                    )

                    break


    except WebSocketDisconnect:

        print(
            "WebSocket disconnected"
        )


    except Exception as e:

        print(
            "WebSocket error:",
            repr(e)
        )


    finally:

        print(
            "WebSocket connection ended"
        )

@app.get("/health")
def health():
    return "Ok"

if __name__ == "__main__":
    import uvicorn
    import os
    port = int(os.environ.get("PORT", 8000))
    uvicorn.run(app, host="0.0.0.0", port=port)