from fastapi import FastAPI, WebSocket
from .model import SentimentModel
from .schemas import TextIn, SentimentOut

app = FastAPI(title="Sentiment Analyzer API")
model = SentimentModel()

@app.post("/predict", response_model=SentimentOut)
async def predict(payload: TextIn):
    return model.predict(payload.text)

@app.websocket("/ws/sentiment")
async def ws_sentiment(ws: WebSocket):
    await ws.accept()
    while True:
        text = await ws.receive_text()
        scores = model.predict(text)
        await ws.send_json(scores)
