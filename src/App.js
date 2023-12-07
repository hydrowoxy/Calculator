
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Calc1 from "./components/Calc1";
import IntegralCalculator from "./calc1f/IntegralCalculator";
import Calc2 from "./components/Calc2";
import Calc3 from "./components/Calc3";
import Discrete from "./components/Discrete";
import Misc from "./components/Misc";
import Tex from "./misc/Tex";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<AboutAndLandingPage />} />
        <Route path="/calc1f/integral-calculator" element={<IntegralCalculator />} />
        <Route path="/calc2" element={<Calc2 />} />
        <Route path="/calc3" element={<Calc3 />} />
        <Route path="/discrete" element={<Discrete />} />
        <Route path="/misc/tex" element={<Tex />} />
      </Routes>
      <Footer />
    </Router>
  );
}

function AboutAndLandingPage() {
  return (
    <React.Fragment>
      <About />
      <LandingPageContent />
    </React.Fragment>
  );
}

function LandingPageContent() {
  return (
    <section id="CalcSection">
      <Calc1 />
      <Calc2 />
      <Calc3 />
      <Discrete />
      <Misc />
    </section>
  );
}
