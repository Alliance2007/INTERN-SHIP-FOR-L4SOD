import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import apiClient from "../api/apiClient";

function EditModule() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    moduleName: "",
    moduleCode: "",
    trainer: "",
    duration: "",
    startDate: "",
    endDate: "",
    level: "Beginner",
    description: "",
    created_at: "",
  });

  const [loading, setLoading] = useState(true);

  // ✅ Fetch module (FIXED)
  const fetchModule = async () => {
    try {
      const resp = await apiClient.get(`/modules/${id}`);
      const data = resp.data;

      setForm({
        moduleName: data.moduleName || "",
        moduleCode: data.moduleCode || "",
        trainer: data.trainer || "",
        duration: data.duration || "",
        startDate: data.startDate
          ? data.startDate.split("T")[0]
          : "",
        endDate: data.endDate
          ? data.endDate.split("T")[0]
          : "",
        level: data.level || "Beginner",
        description: data.description || "",
        created_at: data.created_at
          ? data.created_at.split("T")[0]
          : "",
      });
    } catch (e) {
      console.log("Error fetching module:", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchModule();
  }, [id]);

  // ✅ Handle input change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ Submit update
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await apiClient.put(`/modules/${id}`, form);
      alert("Module updated successfully ✅");
      navigate("/modules");
    } catch (e) {
      console.log("Error updating module:", e);
    }
  };

  // ⏳ Loading state
  if (loading) {
    return <p className="text-center mt-10">Loading module...</p>;
  }

  return (
    <>
      <h1 className="text-4xl font-black text-center mt-5">
        EDIT MODULE
      </h1>

      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">
          Edit module {id}
        </h2>

        <form
          onSubmit={handleSubmit}
          className="min-w-[400px] bg-gradient-to-r from-blue-700 to-blue-400 p-6 rounded-xl shadow-lg"
        >
          <div className="flex flex-col gap-3">

            <input
              type="text"
              name="moduleName"
              value={form.moduleName}
              onChange={handleChange}
              placeholder="Module Name"
              className="border p-2 rounded-lg"
            />

            <input
              type="text"
              name="moduleCode"
              value={form.moduleCode}
              onChange={handleChange}
              placeholder="Module Code"
              className="border p-2 rounded-lg"
            />

            <input
              type="text"
              name="trainer"
              value={form.trainer}
              onChange={handleChange}
              placeholder="Trainer"
              className="border p-2 rounded-lg"
            />

            <input
              type="text"
              name="duration"
              value={form.duration}
              onChange={handleChange}
              placeholder="Duration"
              className="border p-2 rounded-lg"
            />

            <input
              type="date"
              name="startDate"
              value={form.startDate || ""}
              onChange={handleChange}
              className="border p-2 rounded-lg"
            />

            <input
              type="date"
              name="endDate"
              value={form.endDate || ""}
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

            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Description"
              className="border p-2 rounded-lg h-24"
            />

            <button className="mt-3 bg-white text-blue-700 font-bold py-3 rounded-xl hover:bg-gray-100 transition">
              Save Module
            </button>

          </div>
        </form>
      </div>
    </>
  );
}

export default EditModule;