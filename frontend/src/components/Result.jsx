import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Result() {
  const location = useLocation();
  const navigate = useNavigate();

  const { name, score, total } = location.state || {};

  if (!name) {
    return (
      <div className="text-center mt-10">
        <h2>No result found ❌</h2>
        <button
          onClick={() => navigate("/")}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
        >
          Go Home
        </button>
      </div>
    );
  }

  const percentage = ((score / total) * 100).toFixed(0);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow text-center">
        
        <h1 className="text-3xl font-bold mb-4 text-green-600">
          🎉 Exam Result
        </h1>

        <p className="text-lg mb-2">Name: {name}</p>

        <p className="text-xl font-bold text-blue-600">
          Score: {score} / {total}
        </p>

        <p className="mt-2 text-gray-600">
          Percentage: {percentage}%
        </p>

        <button
          onClick={() => navigate("/")}
          className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800"
        >
          Restart Exam
        </button>
      </div>
    </div>
  );
}

export default Result;