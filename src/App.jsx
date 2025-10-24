import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// ...existing code...
import Home from './Components/Home/Home'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Projects from './Components/Featured-Projects/Projects.jsx'
import Header from './Components/Header/Header'
import Mystory from './Components/Mystory/Mystory'
import AboutMe from "./Components/AboutMe/AboutMe.jsx";
import Works from "./Components/Works/Works.jsx";

// ...existing code...

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<><Home /><Works/><AboutMe/><Contact/></>} />
        <Route path="/about" element={<Mystory />} />
        <Route path="/works" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;