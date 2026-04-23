import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Modules from "./components/Modules";
import NavBar from "./components/NavBar";
import Exams from "./components/Exams";
import CreateModule from "./components/CreateModule";
import About from "./components/About";
import Footer from "./components/Footer";
import Registration from "./components/Registration";
import DataDeveloper from "./components/DataDeveloper.jsx";
import Result from "./components/Result.jsx"; 
import EditModule from "./components/EditModule.jsx";
import DeleteModule from "./components/DeleteModule.jsx";
import Calculate from "./components/Calculate.jsx"
import Container from "./components/Container.jsx";
import Buttons from "./components/Buttons.jsx"
function App() {
  return (
    <Router>

      <div className="min-h-screen bg-gray-100">

        <NavBar />

        {/* HEADER */}
        <div className="text-center p-5 bg-gradient-to-r from-blue-800 to-blue-400 text-white">
          <h1 className="text-2xl font-bold">
            E-NOTLIFY COMPANY LTD 🚀
          </h1>
        <p className="text-black text-sm mt-3">
          FULL STACK <span className="text-white font-bold text-lg ">NI MR ALLIANCE 💻</span>
        </p>
                </div>

        {/* ROUTES */}
        <div className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/modules" element={<Modules />} />
            <Route path="/exams" element={<Exams />} />
            <Route path="/create-module" element={<CreateModule />} />
            <Route path="/about" element={<About />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="/registration" element={<Registration/>}/>
            <Route path="/data-developer" element={<DataDeveloper/>}/>
            <Route path="/result" element={<Result/>}/>
            <Route path="/edit-module/:id" element={<EditModule />} />
            <Route path="/delete-module/:id" element={<DeleteModule />} />
            <Route path="/calculate" element={<Calculate/>}/>
            <Route path="/container" element={<Container/>}/>
            <Route path="/increment" element ={<Buttons/>}/>
          </Routes>
        </div>

      </div>
     <Footer />
    </Router>
  );
}

export default App;