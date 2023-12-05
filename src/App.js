import React from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Calc1 from "./components/Calc1";
import Calc2 from "./components/Calc2";
import Calc3 from "./components/Calc3";
import Discrete from "./components/Discrete";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="text-gray-400 bg-lightgray body-font">
      <Navbar />
      <About />
      <Calc1 />
      <Calc2 />
      <Calc3 />
      <Discrete />
      <Footer />
    </main>
  );
}