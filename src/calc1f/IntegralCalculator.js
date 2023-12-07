// components/calc1f/IntegralCalculator.js

import React from "react";
import "./integralComponents/integral.css";
import About from "./integralComponents/About";
import Input from "./integralComponents/Input";
import Output from "./integralComponents/Output"

export default function IntegralCalculator() {
  return (
    <main className="text-gray-400 bg-lightgray body-font">
      <About />
      <Input />
      <Output />
    </main>
  );
};

// the idea qwould be to make this a big page hjust like the app.js for the landing page
//and in this folder it has its own components some for the integral calc some for the deriv calc 
