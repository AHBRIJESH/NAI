FROM python:3.11-slim

WORKDIR /app

COPY --from=ghcr.io/astral-sh/uv:latest /uv /uvx /bin/

COPY requirements.txt .

RUN uv pip install --system --no-cache -r requirements.txt

COPY . .

RUN apt-get update && \
    apt-get install -y curl && \
    rm -rf /var/lib/apt/lists/*

RUN curl -L https://install.meilisearch.com | sh

RUN sed -i 's/\r$//' /app/start.sh && \
    chmod +x /app/meilisearch /app/start.sh

EXPOSE 8000
ENV PORT=8000

CMD ["/app/start.sh"]