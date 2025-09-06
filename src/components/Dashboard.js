// src/components/Dashboard.jsx
import React from "react";
import { Pie, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
} from "chart.js";
import { useNavigate } from "react-router-dom";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title
);

export default function Dashboard() {
  const navigate = useNavigate();

  const pieData = {
    labels: ["Frontend", "Backend", "DevOps", "Design"],
    datasets: [
      {
        label: "Time spent (%)",
        data: [40, 30, 15, 15],
        backgroundColor: [
          "#36A2EB",
          "#FF6384",
          "#FFCE56",
          "#4BC0C0",
        ],
        borderWidth: 1,
      },
    ],
  };

  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Users",
        data: [65, 59, 80, 81, 56, 70],
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        borderWidth: 2,
        borderColor: "#36A2EB",
      },
      {
        label: "Orders",
        data: [28, 48, 40, 19, 86, 27],
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        borderWidth: 2,
        borderColor: "#FF6384",
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    plugins: {
      legend: { position: "bottom" },
      title: { display: true, text: "Work Distribution" },
    },
  };

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Monthly Users & Orders" },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
        <div>
          <button
            className="btn btn-outline-secondary me-2"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
          <button
            className="btn btn-danger"
            onClick={() => navigate("/sign-in")}
          >
            Logout
          </button>
        </div>
      </header>

      <div className="dashboard-content">
        <div className="dashboard-card">
          <Pie data={pieData} options={pieOptions} />
        </div>
        <div className="dashboard-card">
          <Line data={lineData} options={lineOptions} />
        </div>
      </div>
    </div>
  );
}
