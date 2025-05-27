from pydantic import BaseModel

class TextIn(BaseModel):
    text: str

class SentimentOut(BaseModel):
    negative: float
    positive: float
