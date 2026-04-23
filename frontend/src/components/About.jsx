import React from "react";
import DataDeveloper from "./DataDeveloper.jsx";
import { Link } from "react-router-dom";
function About() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-600">
          About Us
        </h1>

        <p className="text-gray-600 mt-2">
          E-NOTLIFY COMPANY LTD - FULL STACK NI MR ALLI 💻
        </p>
      </div>

      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6">

        <h2 className="text-2xl font-bold mb-3">🚀 Who We Are</h2>

        <p className="text-gray-600 mb-6">
          We are a modern e-learning platform built by Alliance focusing on Full Stack Development.
        </p>
          <div className="grid gap-4">

          <div className="bg-blue-100 hover:bg-blue-700 p-4 rounded text-center">
            🎓 Learning
          </div>

          <div className="bg-blue-100 hover:bg-blue-700 p-4 rounded text-center">
            💻 Practice
          </div>

          <div className="bg-blue-100 hover:bg-blue-700 p-4 rounded text-center">
            🚀 Growth
          </div>
          <h2 className="text-2xl font-bold mt-6 mb-3">📚 Our Mission</h2>
          <p className="text-gray-600 mb-6">
            To provide high-quality, accessible education for aspiring developers worldwide.
              </p>
          <h2 className="text-2xl font-bold mt-6 mb-3">🤝 Join Us</h2>
          <p className="text-gray-600 mb-6">
            Become a part of our community and start your journey towards mastering full-stack development.
          </p>


        </div>
      
      <div className="mt-10">
          <Link to="/data-developer" className="ml-2 text-white font-bold">
            <button className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-800">
              <span className="text-lg">
                <div login="true" className="flex items-center gap-2">
                 
                    <span className="text-3xl">See More Data</span>

                  
                </div>
              </span>
              
            </button>
          </Link>
      </div>
          
      
      </div>

    </div>
  );
}

export default About;