import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./Components/ScrollToTop";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Works from "./Components/Works/Works";
import AboutMe from "./Components/AboutMe/AboutMe";
import Contact from "./Components/Contact/Contact";
import Mystory from "./Components/Mystory/Mystory";
import Projects from "./Components/Featured-Projects/Projects";
import PageTransition from "./Components/PageTransition/PageTransition";

function AppContent() {
  const location = useLocation();

  return (
    <>
      <Header />
      <ScrollToTop />
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

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
