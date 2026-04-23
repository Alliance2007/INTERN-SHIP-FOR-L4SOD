import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-blue-700 text-white shadow-md my-3">

      <div className="max-w-6xl mx-auto flex justify-between items-center p-2">

        <h1 className="font-bold text-xl flex items-center gap-2 text-white">
          🚀 E-NOTLIFY
        </h1>

        <div className="flex gap-5 text-sm md:text-base">

          <Link className="hover:text-yellow-900 font-bold" to="/">HOME🏘️</Link>
          <Link className="hover:text-yellow-900 font-bold" to="/modules">MODULES📙</Link>
          <Link className="hover:text-yellow-900 font-bold" to="/exams">EXAMS🤔</Link>
          <Link className="hover:text-yellow-900 font-bold" to="/about">ABOUT😶‍🌫️</Link>

        </div>

        <div className="bg-white text-blue-700 px-3 py-1 rounded-full  text-xs font-bold mx-3 ">
        <h1 className="text-center ">  FULL STACK - ALLIANCE-MAKE E-LEARNING  SYSTEM</h1>
        </div>

      </div>

    </nav>
  );
}

export default NavBar;