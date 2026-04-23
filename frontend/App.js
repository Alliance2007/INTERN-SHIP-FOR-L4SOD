import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Modules from "./components/Modules";
import NavBar from "./components/NavBar";
import Exams from "./components/Exams";
import CreateModule from "./components/CreateModule";
import About from "./components/About";

function App() {
  return (
    <Router>

      <div className="min-h-screen bg-gray-100">

        <NavBar />

        {/* HEADER */}
        <div className="text-center p-5 bg-blue-600 text-white">
          <h1 className="text-2xl font-bold">
            EE-NOTLIFY COMPANY LTD 🚀
          </h1>
          <p>FULL STACK - ALLIANCE 💻</p>
        </div>

        {/* ROUTES */}
        <div className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/module" element={<Modules />} />
            <Route path="/exams" element={<Exams />} />
            <Route path="/create-module" element={<CreateModule />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>

      </div>

    </Router>
  );
}

export default App;