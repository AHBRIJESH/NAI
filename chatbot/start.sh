#!/bin/sh
set -e

PORT="${PORT:-8000}"

# Start embedding server
echo "Starting embedding server..."
python embed.py &
EMBED_PID=$!

echo "Waiting for embedding server..."
until curl -s http://localhost:7870/health >/dev/null; do
    sleep 1
done

echo "Embedding server is ready."

# Test embedding endpoint
echo "Testing embedding endpoint..."
curl -X POST http://127.0.0.1:7870/embed \
    -H "Content-Type: application/json" \
    -d '{"inputs":["test embedding"]}'

echo ""
echo "Embedding endpoint test completed."

# Start Meilisearch
echo "Starting Meilisearch..."
export MEILI_EXPERIMENTAL_ALLOWED_IP_NETWORKS=any
./meilisearch --http-addr 0.0.0.0:7700 &
MEILI_PID=$!

# Wait for Meilisearch
echo "Waiting for Meilisearch..."
until curl -s http://localhost:7700/health >/dev/null; do
    sleep 1
done

echo "Meilisearch is ready."

# Run ingestion
echo "Starting ingestion..."
python ingest.py
echo "Ingestion completed."

# Start retriever service
echo "Starting retriever service..."
python retriever.py &
RETRIEVER_PID=$!

trap 'kill $EMBED_PID $MEILI_PID $RETRIEVER_PID 2>/dev/null || true' EXIT

if [ -f .env ]; then
    export $(grep -v '^#' .env | xargs)
fi

# Start API
echo "Starting API on port ${PORT}..."
python app.py &
APP_PID=$!

echo "Waiting for Backend server..."
until curl -s "http://localhost:${PORT}/health" >/dev/null; do
    sleep 1
done

echo "Backend server is ready."

# Keep container alive
wait $APP_PID

