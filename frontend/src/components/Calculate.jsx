import React, { useState } from "react";

function Calculate() {
  const [display, setDisplay] = useState("");

  const press = (value) => {
    setDisplay(display + value);
  };

  const calculate = () => {
    try {
      setDisplay(eval(display).toString());
    } catch {
      setDisplay("Error!");
    }
  };

  const clearDisplay = () => {
    setDisplay("");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      
      <h1 className="text-2xl font-bold mb-6">
        THIS IS SOFT CALULATE 📱 
      </h1>

      <div className=" bg-gradient-to-r from-blue-700 to-blue-400 p-6 rounded-xl shadow-md text-center">
        
        {/* Display */}
        <input
          type="text"
          value={display}
          readOnly
          className="border p-2 w-full mb-4 text-right text-xl rounded-xl"
        />

        {/* Buttons */}
        <div className="grid grid-cols-4 text-white font-black  gap-2 ">

          <button onClick={() => press("7")} className="hover:text-red-600">7</button>
          <button onClick={() => press("8")} className="hover:text-red-600">8</button>
          <button onClick={() => press("9")} className="hover:text-red-600">9</button>
          <button onClick={() => press("/")} className="hover:text-red-600">/</button>

          <button onClick={() => press("4")} className="hover:text-red-600">4</button>
          <button onClick={() => press("5")} className="hover:text-red-600">5</button>
          <button onClick={() => press("6")} className="hover:text-red-600">6</button>
          <button onClick={() => press("*")} className="hover:text-red-600">*</button>

          <button onClick={() => press("1")} className="hover:text-red-600">1</button>
          <button onClick={() => press("2")} className="hover:text-red-600">2</button>
          <button onClick={() => press("3")} className="hover:text-red-600">3</button>
          <button onClick={() => press("-")} className="hover:text-red-600">-</button>

          <button onClick={() => press("0")} className="hover:text-red-600">0</button>
          <button onClick={() => press(".")} className="hover:text-red-600">.</button>
          <button onClick={calculate} className="hover:text-red-600">=</button>
          <button onClick={() => press("+")}>+</button>

        </div>

        {/* Clear */}
        <button
          onClick={clearDisplay}
          className="mt-4 bg-red-500 hover:text-white-600 text-white px-4 py-2 rounded"
        >
          C
        </button>

      </div>
    </div>
  );
}

export default Calculate;