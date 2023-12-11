import React from "react";
import "./BinaryAddComponents/binaryadd.css";
import About from "./BinaryAddComponents/About";
import BinaryAddSubtract from "./BinaryAddComponents/BinaryAddSubtract";
import TwosComp from "./BinaryAddComponents/TwosComp";

export default function BinaryAdd() {
  return ( 
    <main className="text-gray-400 bg-lightgray body-font">
      <About />
      <BinaryAddSubtract />
      <TwosComp />
    </main>
  );
};