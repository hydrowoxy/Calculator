import React, { useState } from "react";
import "./tex.css";
import { MathJax, MathJaxContext } from "better-react-mathjax";

export default function Editor() {
  const [latexCode, setLatexCode] = useState("\\int_{a}^{b} sin(x^2) dx ");

  const handleLatexCodeChange = (event) => {
    setLatexCode(event.target.value);
  };

  return (
    <MathJaxContext version={3}>
      <div className="tex">
        <section className="bg-lightgray mt-0 body-font">
          <div className="container px-5 mx-auto text-center lg:px-40">
            <div className="flex flex-col w-full mb-20">
              <h1 className="sm:text-3xl text-3xl font-medium text-left title-font mb-8 mt-10 text-navy">
                Basic LaTeX Editor
              </h1>
              {/* Input field for LaTeX code */}
              <div className="text-left mb-4">
                <label htmlFor="latexCode" className="mr-2 text-lg text-navy">
                  Enter LaTeX Code:
                </label>
                <input
                  type="text"
                  id="latexCode"
                  name="latexCode"
                  value={latexCode}
                  onChange={handleLatexCodeChange}
                  className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-texlight focus:ring-2 focus:ring-texlight w-full"
                />
              </div>
              {/* Display MathJax expression */}
              <div className="rounded-lg overflow-hidden bg-white p-4 shadow-lg">
                <MathJax
                  className="text-3xl text-navy"
                  style={{ width: "100%", minHeight: "80px" }}
                >{`\\[${latexCode}\\]`}</MathJax>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MathJaxContext>
  );
}
