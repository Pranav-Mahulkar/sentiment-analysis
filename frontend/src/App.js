import { useState } from "react";
import { predictSentiment } from "./api";
import SentimentChart from "./components/SentimentChart";

export default function App() {
  const [text, setText] = useState("");
  const [scores, setScores] = useState(null);
  const [error, setError] = useState("");

  const handleAnalyze = async () => {
    try {
      const result = await predictSentiment(text);
      setScores(result);
      setError("");
    } catch (e) {
      setError("Failed to get sentiment.");
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: "2rem auto", fontFamily: "sans-serif" }}>
      <h1>Sentiment Analyzer</h1>
      <textarea
        rows={4}
        style={{ width: "100%", padding: "0.5rem" }}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button style={{ marginTop: "1rem", padding: "0.5rem 1rem" }} onClick={handleAnalyze}>
        Analyze
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {scores && <SentimentChart scores={scores} />}
    </div>
  );
}
