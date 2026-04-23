import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Container from "./Container";

function Modules() {
  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchModules();
  }, []);

  const fetchModules = async () => {
    try {
      const res = await axios.get("http://localhost:5000/modules");
      setModules(res.data);
    } catch (err) {
      console.error("Error fetching modules:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this module?")) return;

    try {
      await axios.delete(`http://localhost:5000/modules/${id}`);
      setModules(modules.filter((module) => module.id !== id));
    } catch (err) {
      console.error("Error deleting module:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-2">📚 Modules</h1>

      <p className="text-center text-gray-500 mb-6">
        E-NOTLIFY COMPANY LTD - FULL STACK ALLIANCE 💻
      </p>

      <div className="text-center mb-6">
        <Link
          to="/create-module"
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-800"
        >
          ➕ Create Module
        </Link>
      </div>

      <div className="overflow-x-auto mt-4">
        <table className="text-center bg-blue-100 border-separate border-spacing-3 w-full">
          <thead>
            <tr>
              <th>ID</th>
              <th>Module Name</th>
              <th>Code</th>
              <th>Trainer</th>
              <th>Duration</th>
              <th>Level</th>
              <th>Created At</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan="9" className="p-4">
                  Loading modules...
                </td>
              </tr>
            ) : modules.length > 0 ? (
              modules.map((module) => (
                <tr key={module.id}>
                  <td>{module.id}</td>
                  <td>{module.moduleName}</td>
                  <td>{module.moduleCode}</td>
                  <td>{module.trainer}</td>
                  <td>{module.duration}</td>
                  <td>{module.level}</td>
                  <td>{new Date(module.created_at).toLocaleDateString()}</td>
                  <td>{module.description}</td>

                  <td className="space-x-2">
                    <Link
                      to={`/edit-module/${module.id}`}
                      className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-800"
                    >
                      Edit
                    </Link>

                    <button
                      onClick={() => handleDelete(module.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="p-4">
                  No modules found ❌
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="text-center mt-6">
        <p className="mb-2">CONTINUE TO SEE🥴Other activity by NI MR ALLI</p>
        <Link
          to="/container"
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-800"
        >
         Click here👆
        </Link>
      </div>
    </div>
  );
}

export default Modules;