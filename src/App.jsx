import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Projects from './Components/Featured-Projects/Projects.jsx';
import Header from './Components/Header/Header';
import Mystory from './Components/Mystory/Mystory';
import AboutMe from "./Components/AboutMe/AboutMe.jsx";
import Works from "./Components/Works/Works.jsx";
import PageTransition from './Components/PageTransition/PageTransition.jsx';

function AppContent() {
  const location = useLocation();

  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <Home />
                <Works />
                <AboutMe />
                <Contact />
              </PageTransition>
            }
          />
          <Route
            path="/about"
            element={
              <PageTransition>
                <Mystory />
              </PageTransition>
            }
          />
          <Route
            path="/works"
            element={
              <PageTransition>
                <Projects />
              </PageTransition>
            }
          />
          <Route
            path="/contact"
            element={
              <PageTransition>
                <Contact />
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
