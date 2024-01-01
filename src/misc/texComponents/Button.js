// Button.js
import React from "react";
import { MathJax } from "better-react-mathjax";

const Button = ({ latex, icon, onClick }) => (
  <button
    className="bg-white ring-2 text-navy ring-gray-200 focus:outline-none focus:border-texdark focus:ring-2 focus:ring-texdark text-sm focus:text-texdark mt-4 mb-8 px-6 py-0 rounded-md"
    onClick={onClick}
  >
    <div className="flex items-center justify-center" style={{ height: "100%" }}>
      <MathJax className="text-xl text-navy">{icon}</MathJax>
    </div>
  </button>
);

export default Button;
