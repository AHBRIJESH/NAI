import meilisearch
import requests
from fastapi import FastAPI

app = FastAPI()

client = meilisearch.Client('http://localhost:7700')
index = client.index('Industry_Data')

session = requests.Session()

@app.get('/retrive')
def retrieve(query: str):
    result = index.search(
        query,
        {
            "limit": 5,
            "hybrid": {
                "semanticRatio": 1.0,
                "embedder": "hf-inference",
            },
            "showRankingScore": True,
        },
    )
    print("TOTAL HITS:", result.get("estimatedTotalHits"))
    print("HITS:", len(result.get("hits", [])))
    print(result)
    return result["hits"]

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app,host="0.0.0.0",port=8001)