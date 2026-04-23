import React, { useState } from "react";
import apiClient from "../api/apiClient";

export default function CreateModule() {
  const [form, setForm] = useState({
    moduleName: "",
    moduleCode: "",
    trainer: "",
    description: "",
    duration: "",
    level: "Beginner",
    startDate: "",
    endDate: "",
    created_at: new Date().toISOString().slice(0, 10),
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setError(""); // clear error when typing
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.moduleName || !form.moduleCode || !form.trainer) {
      setError("⚠️ Please fill required fields");
      return;
    }

    try {
      setLoading(true);

      const response = await apiClient.post("/modules", form);
      console.log("Saved:", response.data);

      alert("Module saved successfully ✅");

      // reset form
      setForm({
        moduleName: "",
        moduleCode: "",
        trainer: "",
        description: "",
        duration: "",
        level: "Beginner",
        startDate: "",
        endDate: "",
        created_at: new Date().toISOString().slice(0, 10),
      });

    } catch (err) {
      console.error(err);

      setError(
        err.response?.data?.message ||
        "❌ Failed to save module (check backend)"
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-3xl bg-white p-6 rounded-2xl shadow-lg">

        <h1 className="text-3xl font-bold text-center mb-6">
          ➕ Create Module
        </h1>

        {error && (
          <p className="text-red-500 text-center mb-4">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">

          <div className="grid md:grid-cols-2 gap-4">

            <input
              name="moduleName"
              value={form.moduleName}
              onChange={handleChange}
              placeholder="Module Name *"
              className="border p-2 rounded-lg"
            />

            <input
              name="moduleCode"
              value={form.moduleCode}
              onChange={handleChange}
              placeholder="Module Code *"
              className="border p-2 rounded-lg"
            />

            <input
              name="trainer"
              value={form.trainer}
              onChange={handleChange}
              placeholder="Trainer *"
              className="border p-2 rounded-lg"
            />

            <input
              name="duration"
              value={form.duration}
              onChange={handleChange}
              placeholder="Duration"
              className="border p-2 rounded-lg"
            />

            <input
              type="date"
              name="startDate"
              value={form.startDate}
              onChange={handleChange}
              className="border p-2 rounded-lg"
            />

            <input
              type="date"
              name="endDate"
              value={form.endDate}
              onChange={handleChange}
              className="border p-2 rounded-lg"
            />

            <select
              name="level"
              value={form.level}
              onChange={handleChange}
              className="border p-2 rounded-lg"
            >
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>

            <input
              value={form.created_at}
              readOnly
              className="border p-2 rounded-lg bg-gray-100"
            />
          </div>

          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Description"
            className="border p-2 rounded-lg w-full h-24"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl disabled:opacity-50"
          >
            {loading ? "Saving..." : "💾 Save Module"}
          </button>

        </form>
      </div>
    </div>
  );
}