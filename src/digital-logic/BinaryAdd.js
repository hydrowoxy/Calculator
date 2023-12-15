import React from "react";
import "./BinaryAddComponents/binaryadd.css";
import About from "./BinaryAddComponents/About";
import Addition from "./BinaryAddComponents/Addition";

export default function BinaryAdd() {
  return ( 
    <main className="text-gray-400 bg-lightgray body-font">
      <About />
      <Addition />
    </main>
  );
};