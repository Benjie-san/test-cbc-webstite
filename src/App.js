import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About-us";
import Contact from "./pages/Contact";
import Ministry from "./pages/Ministry";
import Testimony from "./pages/Testimony";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Ministry" element={<Ministry />} />
            <Route path="/Testimony" element={<Testimony />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
