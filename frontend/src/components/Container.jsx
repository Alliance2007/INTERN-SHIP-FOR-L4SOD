import React from "react";
import { Link } from "react-router-dom";

function Container() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">

      <h1 className="text-2xl font-bold text-center mb-6">
        THIS IS A FORM CONTAINING MORE LINKS OF ACTIVITIES MADE BY NI MR ALLI
      </h1>

      <div className="bg-white p-6 rounded-xl shadow-md text-center flex flex-col gap-4 w-full max-w-md">

        <Link
          to="/calculate"
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-800 transition"
        >
          SOFT CALCULATE 🧮
        </Link>

        <Link
          to="/increment"
          className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-800 transition"
        >
          LIKE / FOLLOW BUTTON ❤️🙌
        </Link>

        <p className="text-gray-500 mt-4">
          Other activities will be listed here...
        </p>

      </div>
    </div>
  );
}

export default Container;