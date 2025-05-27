from transformers import AutoTokenizer, AutoModelForSequenceClassification
import torch.nn.functional as F

class SentimentModel:
    def __init__(self, model_name="distilbert-base-uncased-finetuned-sst-2-english"):
        self.tokenizer = AutoTokenizer.from_pretrained(model_name)
        self.model     = AutoModelForSequenceClassification.from_pretrained(model_name)

    def predict(self, text: str):
        inputs = self.tokenizer(text, return_tensors="pt", truncation=True, padding=True)
        logits = self.model(**inputs).logits
        scores = F.softmax(logits, dim=-1)[0].tolist()
        return {"negative": scores[0], "positive": scores[1]}
