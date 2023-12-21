import React, { useState, useEffect } from "react";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import "./binaryadd.css";
import ToggleButtonArray from "./ToggleButtonArray"; // Import the new component

export default function Addition() {
  const [selectedNumber, setSelectedNumber] = useState(5);
  const [binaryValuesTop, setBinaryValuesTop] = useState(Array(selectedNumber).fill(0));
  const [binaryValuesBottom, setBinaryValuesBottom] = useState(Array(selectedNumber).fill(0));
  const [binaryValueX, setBinaryValueX] = useState("0".repeat(selectedNumber));
  const [binaryValueY, setBinaryValueY] = useState("0".repeat(selectedNumber));

  useEffect(() => {
    // Calculate binary values for the top row (binaryValueX)
    const binaryX = binaryValuesTop.slice(0, selectedNumber).reverse().join("");
    setBinaryValueX(binaryX);
  }, [binaryValuesTop, selectedNumber]);

  useEffect(() => {
    // Calculate binary values for the bottom row (binaryValueY)
    const binaryY = binaryValuesBottom.slice(0, selectedNumber).reverse().join("");
    setBinaryValueY(binaryY);
  }, [binaryValuesBottom, selectedNumber]);

  const handleNumberChange = (e) => {
    setSelectedNumber(parseInt(e.target.value, 10));
    setBinaryValuesTop(Array(parseInt(e.target.value, 10)).fill(0));
    setBinaryValuesBottom(Array(parseInt(e.target.value, 10)).fill(0));
    setBinaryValueX("0".repeat(parseInt(e.target.value, 10)));
    setBinaryValueY("0".repeat(parseInt(e.target.value, 10)));
  };

  const handleBinaryChangeTop = (index, value) => {
    const newBinaryValuesTop = [...binaryValuesTop];
    newBinaryValuesTop[index] = value;
    setBinaryValuesTop(newBinaryValuesTop);
  };

  const handleBinaryChangeBottom = (index, value) => {
    const newBinaryValuesBottom = [...binaryValuesBottom];
    newBinaryValuesBottom[index] = value;
    setBinaryValuesBottom(newBinaryValuesBottom);
  };

  // The main calculateBinaryResult function
  const calculateBinaryResult = () => {
    // Calculate binary values for the top row (binaryValueX)
    const resultBinaryX = parseInt(binaryValuesTop.slice(0, selectedNumber).reverse().join(""), 2);

    // Calculate binary values for the bottom row (binaryValueY)
    const resultBinaryY = parseInt(binaryValuesBottom.slice(0, selectedNumber).reverse().join(""), 2);

    // Perform binary addition
    const resultBinary = resultBinaryX + resultBinaryY;

    // Convert the result to binary representation
    const binaryResult = resultBinary.toString(2).padStart(selectedNumber, '0').split('').map(Number);

    return binaryResult;
  };

  const generateColumns = () => {
    const columns = [];

    columns.push(
      <div key="extra-column" className="column text-navy">
        {Array.from({ length: 2 }).map((_, index) => (
          <div key={index} className="empty-space"></div>
        ))}
        {/* Pass the onChange prop here */}
        <ToggleButtonArray index={-1} isSpecialButton={true} onChange={() => {}} />
      </div>
    );

    for (let i = selectedNumber - 1; i >= 0; i--) {
      columns.push(
        <div key={i} className="column text-navy">
          <MathJax>{`\\[${Math.pow(2, i)}\\]`}</MathJax>
          {/* Pass the onChange prop here */}
          <ToggleButtonArray index={i} onChange={(value) => handleBinaryChangeTop(i, value)} />
          {/* Pass the onChange prop here */}
          <ToggleButtonArray index={i} onChange={(value) => handleBinaryChangeBottom(i, value)} />
        </div>
      );
    }

    return columns;
  };

  return (
    <MathJaxContext version={3}>
      <div className="binaryadd">
        <section className="bg-lightgray mt-20 body-font">
          <div className="container mx-auto px-5 py-10 text-center lg:px-40">
            <h1 className="sm:text-3xl text-3xl font-medium text-left title-font mb-14 text-navy">
              Binary Addition Calculator
            </h1>
            <div className="flex flex-col w-full items-center">
              <div className="flex items-center text-2xl text-navy">
                <label htmlFor="numberInput" className="mr-2">
                  <MathJax>{`\\[\\text{The number of bits in each number, } n =\\]`}</MathJax>
                </label>
                <select id="numberInput" value={selectedNumber} onChange={handleNumberChange}>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
                <div className="text-left text-2xl ml-10 text-navy">
                  <MathJax>{`\\[2^{n - 1} = 2^{${selectedNumber} - 1} = 2^{${selectedNumber - 1}} = ${Math.pow(
                    2,
                    selectedNumber - 1
                  )}\\]`}</MathJax>
                </div>
              </div>
              <div className="text-xl">
                Click a tile in the binary addition below to toggle between 0 and 1! If the result has an extra bit on the far left, that means there was{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Integer_overflow"
                  className="text-binarydark underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  overflow
                </a>
                . This basically means there was a carry-out from the last (furthest left) column.
              </div>
              <div className="flex mt-4 columns-container">{generateColumns()}</div>
              <div className="horizontal-line" style={{ width: `${(selectedNumber + 1) * 75}px` }}></div>
              {/* Display the result row */}
              <div className="result-row">
                <div className="column text-navy text-center">
                  <MathJax>{`\\[\\qquad\\quad \\ \\ \\ \\ ${calculateBinaryResult().join(' \\quad \\ \\ \\text{      }')}\\]`}</MathJax>
                </div>
              </div>
              {/* Display binary values X and Y */}
              <div className="result-row">
                <div className="mt-10 mb-20 text-xl text-center">
                  <p>{`First binary number: ${binaryValueX}, Second binary number: ${binaryValueY}`}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MathJaxContext>
  );
}
