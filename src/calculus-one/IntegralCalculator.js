import React from "react";
import "./integralComponents/integral.css";
import About from "./integralComponents/About";
import Input from "./integralComponents/Input";
import Output from "./integralComponents/Output";

export default function IntegralCalculator() {
  return (
    <main className="text-gray-400 bg-lightgray body-font">
      <About />
      <Input />
      <Output />
    </main>
  );
};
