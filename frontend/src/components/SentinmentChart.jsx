import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

export default function SentimentChart({ scores }) {
  const data = {
    labels: ["Negative", "Positive"],
    datasets: [{ label: "Sentiment Score", data: [scores.negative, scores.positive] }],
  };
  return <Bar data={data} />;
}
