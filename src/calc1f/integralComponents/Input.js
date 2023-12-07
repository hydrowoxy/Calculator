
import React, { useState } from "react";
import "./integral.css";

export default function Input() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    const [variable, setVariable] = useState("x");
    const [lowerBound, setLowerBound] = useState("");
    const [upperBound, setUpperBound] = useState("");
    const [mathFunction, setMathFunction] = useState("");

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

    const setLowerBoundToNegInfinity = () => {
        setLowerBound("-Infinity");
    };

    const setLowerBoundToInfinity = () => {
        setLowerBound("+Infinity");
    };

    const setUpperBoundToNegInfinity = () => {
        setUpperBound("-Infinity");
    };

    const setUpperBoundToInfinity = () => {
        setUpperBound("+Infinity");
    };

    const handleClearLowerBound = () => {
        setLowerBound("");
    };

    const handleClearUpperBound = () => {
        setUpperBound("");
    };

    return (
        <div className="integral">
            <section className="bg-lightgray mt-20 body-font">
                <div className="container px-5 mx-auto text-center lg:px-40">
                    <h1 className="sm:text-3xl text-3xl font-medium text-left title-font mb-4 text-navy">
                        Input
                    </h1>
                    <div className="grid grid-cols-2 gap-4 w-full mb-10">
                        {/* Left side - Variable, Lower Bound, and Upper Bound */}
                        <div className="text-left">
                            <h1 className="sm:text-2xl text-3xl font-medium text-left title-font mt-10 mb-4 text-navy">
                                Specifications...
                            </h1>

                            <div className="mb-4">
                                <label htmlFor="variable" className="mr-2 text-lg text-navy">
                                    Variable:
                                </label>
                                <select
                                    id="variable"
                                    value={variable}
                                    onChange={handleVariableChange}
                                    className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:border-integraldark focus:ring-2 focus:ring-integraldark"
                                >
                                    {Array.from(alphabet).map((letter) => (
                                        <option key={letter} value={letter.toLowerCase()}>
                                            {letter}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="lowerBound" className="mr-2 text-lg text-navy">
                                    Lower Bound:
                                </label>
                                <input
                                    type="text"
                                    id="lowerBound"
                                    value={lowerBound}
                                    onChange={handleLowerBoundChange}
                                    placeholder="From..."
                                    className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-integraldark focus:ring-2 focus:ring-integraldark"
                                />
                                <button
                                    onClick={setLowerBoundToInfinity}
                                    className="ml-2 mr-2"
                                >
                                    +∞
                                </button>
                                <button
                                    onClick={setLowerBoundToNegInfinity}
                                    className="mr-2"
                                >
                                    -∞
                                </button>
                                <button onClick={handleClearLowerBound} className="mr-2">
                                    Clear
                                </button>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="upperBound" className="mr-2 text-lg text-navy">
                                    Upper Bound:
                                </label>
                                <input
                                    type="text"
                                    id="upperBound"
                                    value={upperBound}
                                    onChange={handleUpperBoundChange}
                                    placeholder="To..."
                                    className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-integraldark focus:ring-2 focus:ring-integraldark"
                                />
                                <button
                                    onClick={setUpperBoundToInfinity}
                                    className="ml-2 mr-2"
                                >
                                    +∞
                                </button>
                                <button
                                    onClick={setUpperBoundToNegInfinity}
                                    className="mr-2"
                                >
                                    -∞
                                </button>
                                <button onClick={handleClearUpperBound} className="mr-2">
                                    Clear
                                </button>
                            </div>
                        </div>

                        {/* Right side - Mathematical Expression */}
                        <div className="text-left">
                            <h1 className="sm:text-2xl text-3xl font-medium text-left title-font mt-10 mb-4 text-navy">
                                Take the integral of...
                            </h1>
                            <div className="mb-4">
                                <label htmlFor="mathFunction" className="mr-2 text-lg text-navy">
                                    Function to integrate:
                                </label>
                                <input
                                    type="text"
                                    id="mathFunction"
                                    value={mathFunction}
                                    onChange={handleMathFunctionChange}
                                    placeholder="Enter function..."
                                    className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-integraldark focus:ring-2 focus:ring-integraldark w-full"
                                />
                            </div>
                        </div>
                    </div>
                    <p>
                        Variable: {variable}, Lower Bound: {lowerBound}, Upper Bound: {upperBound}, Mathematical Expression: {mathFunction}
                    </p>

                    {/* Additional Section - Display Integral Expression */}
                    <div className="text-center">
            <h1 className="sm:text-2xl text-3xl font-medium text-center title-font mt-10 mb-4 text-navy">
              Integral Expression
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
}