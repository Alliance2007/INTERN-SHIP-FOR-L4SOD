import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Registration() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.firstname ||
      !formData.lastname ||
      !formData.email ||
      !formData.password
    ) {
      alert("Please enter all your details ❌");
      return;
    }

    console.log(formData);

    alert("Registered successfully ✅");

    navigate("/exams");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md"
      >
        <h1 className="text-2xl font-bold text-center mb-6">
          REGISTRATION FORM®️
        </h1>

        <input
          type="text"
          name="firstname"
          placeholder="Enter your first name"
          className="w-full p-3 mb-4 border rounded-lg"
          onChange={handleChange}
        />

        <input
          type="text"
          name="lastname"
          placeholder="Enter your last name"
          className="w-full p-3 mb-4 border rounded-lg"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="w-full p-3 mb-4 border rounded-lg"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          className="w-full p-3 mb-4 border rounded-lg"
          onChange={handleChange}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-800"
        >
          Register
        </button>

        <p className="mt-4 text-center">
          Already have an account?{" "}
          <Link to="/exams" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Registration;