import React, { useState, useEffect } from "react";
import { MathJax, MathJaxContext } from "better-react-mathjax";

export default function Input() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const [variable, setVariable] = useState("x");
  const [lowerBound, setLowerBound] = useState("");
  const [upperBound, setUpperBound] = useState("");
  const [mathFunction, setMathFunction] = useState("");
  const [integralExpression, setIntegralExpression] = useState("");

  const setBound = (bound, value) => {
    switch (bound) {
      case "lower":
        setLowerBound(value);
        break;
      case "upper":
        setUpperBound(value);
        break;
      default:
        break;
    }
  };

  const setBoundToInfinity = (bound) => {
    setBound(bound, "+Infinity");
  };

  const setBoundToNegInfinity = (bound) => {
    setBound(bound, "-Infinity");
  };

  const handleClearBound = (bound) => {
    setBound(bound, "");
  };

  const handleVariableChange = (e) => {
    setVariable(e.target.value);
  };

  const handleLowerBoundChange = (e) => {
    setLowerBound(e.target.value);
  };

  const handleUpperBoundChange = (e) => {
    setUpperBound(e.target.value);
  };

  const handleMathFunctionChange = (e) => {
    setMathFunction(e.target.value);
  };

  useEffect(() => {
    // Create a LaTeX expression for the integral using the user input
    const lower =
      lowerBound === "-Infinity"
        ? "-\\infty"
        : lowerBound === "+Infinity"
        ? "+\\infty"
        : lowerBound;
    const upper =
      upperBound === "+Infinity"
        ? "+\\infty"
        : upperBound === "-Infinity"
        ? "-\\infty"
        : upperBound;
    const integralExpression = `\\int_{${lower}}^{${upper}} ${mathFunction} \\,d${variable}`;
    setIntegralExpression(integralExpression);
  }, [variable, lowerBound, upperBound, mathFunction]);

  return (
    <MathJaxContext version={3}>
      <div className="integral">
        <section className="bg-lightgray mt-20 body-font">
          <div className="container px-5 mx-auto text-center lg:px-40">
            <h1 className="bold-left-header">
              Input
            </h1>
            <div className="grid grid-cols-2 gap-4 w-full mb-10">
              <div className="text-left">
                <h1 className="description">
                  Specifications...
                </h1>

                <div className="mb-4">
                  <label htmlFor="variable" className="sub-description mr-4">
                    Variable:
                  </label>
                  <select
                    id="variable"
                    value={variable}
                    onChange={handleVariableChange}
                    className="border border-gray-300 rounded-md mb-6 px-2 py-1 focus:outline-none focus:border-integraldark focus:ring-2 focus:ring-integraldark"
                  >
                    {Array.from(alphabet).map((letter) => (
                      <option key={letter} value={letter.toLowerCase()}>
                        {letter}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-4">
                  <label htmlFor="lowerBound" className="sub-description mr-4">
                    Lower Bound:
                  </label>
                  <input
                    type="text"
                    id="lowerBound"
                    value={lowerBound}
                    onChange={handleLowerBoundChange}
                    placeholder="From..."
                    className="border border-gray-300 rounded-md px-4 py-2 sub-description focus:outline-none focus:border-integraldark focus:ring-2 focus:ring-integraldark"
                  />
                  <button onClick={() => setBoundToInfinity("lower")} className="ml-2 mr-2 button">
                    <MathJax>{"\\[+\\infty\\]"}</MathJax>
                  </button>
                  <button onClick={() => setBoundToNegInfinity("lower")} className="mr-2 button">
                    <MathJax>{"\\[-\\infty\\]"}</MathJax>
                  </button>
                  <button onClick={() => handleClearBound("lower")} className="mr-2 button">
                    Clear
                  </button>
                </div>

                <div className="mb-4">
                  <label htmlFor="upperBound" className="sub-description mr-4">
                    Upper Bound:
                  </label>
                  <input
                    type="text"
                    id="upperBound"
                    value={upperBound}
                    onChange={handleUpperBoundChange}
                    placeholder="To..."
                    className="border border-gray-300 rounded-md px-4 py-2 sub-description focus:outline-none focus:border-integraldark focus:ring-2 focus:ring-integraldark"
                  />
                  <button onClick={() => setBoundToInfinity("upper")} className="ml-2 mr-2 button">
                    <MathJax>{"\\[+\\infty\\]"}</MathJax>
                  </button>
                  <button onClick={() => setBoundToNegInfinity("upper")} className="mr-2 button">
                    <MathJax>{"\\[-\\infty\\]"}</MathJax>
                  </button>
                  <button onClick={() => handleClearBound("upper")} className="mr-2 button">
                    Clear
                  </button>
                </div>
              </div>

              <div className="text-left">
                <h1 className="description">
                  Take the integral of...
                </h1>
                <div className="mb-4">
                  <label htmlFor="mathFunction" className="sub-description mr-4">
                    Function to integrate:
                  </label>
                  <input
                    type="text"
                    id="mathFunction"
                    value={mathFunction}
                    onChange={handleMathFunctionChange}
                    placeholder="Enter function..."
                    className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none sub-description focus:border-integraldark focus:ring-2 focus:ring-integraldark w-full"
                  />
                </div>
              </div>
            </div>
            <p className="sub-description">
              Variable: {variable}, Lower Bound: {lowerBound}, Upper Bound: {upperBound},
              Mathematical Expression: {mathFunction}
            </p>

            <div className="text-center text-4xl text-navy">
              <h1 className="bold-left-header">
                Integral Expression
              </h1>
              <MathJax>{`\\[${integralExpression}\\]`}</MathJax>
              <button className="bg-integraldark text-xl text-navy hover:underline px-10 py-2 rounded-md mt-12">
                Calculate Integral
              </button>
            </div>
          </div>
        </section>
      </div>
    </MathJaxContext>
  );
}
