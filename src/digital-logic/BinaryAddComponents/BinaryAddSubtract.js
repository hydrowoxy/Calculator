import React, { useState, useEffect } from "react";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import "./binaryadd.css";

const ToggleButton = ({ value, onChange }) => {
  const handleClick = () => {
    const newValue = value === 0 ? 1 : 0;
    onChange(newValue);
  };

  return (
    <div className="toggle-button-container">
      <button className={`toggle-button ${value === 1 ? "active" : ""}`} onClick={handleClick}>
        {value === 1 ? "1" : "0"}
      </button>
    </div>
  );
};

const ToggleButtonArray = ({ index, isSpecialButton, onChange }) => {
  const [binaryValue, setBinaryValue] = useState(0);

  const handleButtonChange = () => {
    const newValue = binaryValue === 0 ? 1 : 0;
    setBinaryValue(newValue);
    onChange(newValue);
  };

  return (
    <div className={`toggle-button-array ${isSpecialButton ? "special" : ""}`}>
      {isSpecialButton ? (
        <button
          className={`toggle-button ${binaryValue === 1 ? "active" : ""}`}
          onClick={handleButtonChange}
        >
          <MathJax>{`\\[${binaryValue === 1 ? "-" : "+"}\\]`}</MathJax>
        </button>
      ) : (
        <ToggleButton value={binaryValue} onChange={handleButtonChange} />
      )}
    </div>
  );
};

export default function BinaryAddSubtract() {
  const [selectedNumber, setSelectedNumber] = useState(5);
  const [binaryValuesTop, setBinaryValuesTop] = useState(Array(selectedNumber).fill(0));
  const [binaryValuesBottom, setBinaryValuesBottom] = useState(Array(selectedNumber).fill(0));
  const [binaryValueX, setBinaryValueX] = useState("0".repeat(selectedNumber));
  const [binaryValueY, setBinaryValueY] = useState("0".repeat(selectedNumber));
  const [operation, setOperation] = useState("+"); // Default operation is addition

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

  const handleOperationChange = () => {
    setOperation((prevOperation) => (prevOperation === "+" ? "-" : "+"));
  };

// Function for binary addition
const calculateBinaryAddition = () => {
  const resultBinaryX = parseInt(binaryValueX, 2);
  const resultBinaryY = parseInt(binaryValueY, 2);

  // Perform binary addition
  const resultBinary = resultBinaryX + resultBinaryY;

  // Convert the result to binary representation
  const binaryResult = resultBinary.toString(2).padStart(selectedNumber, '0').split('').map(Number);

  return binaryResult;
};

// Function for binary subtraction using signed magnitude method
const calculateBinarySubtraction = () => {
  // Calculate 1's complement of Y
  const onesComplementY = binaryValueY.split('').map(bit => (bit === '0' ? '1' : '0')).join('');

  // Add 1 to the 1's complement to get 2's complement
  const binaryOne = '0'.repeat(onesComplementY.length - 1) + '1';
  const twosComplementY = (parseInt(onesComplementY, 2) + parseInt(binaryOne, 2)).toString(2).padStart(selectedNumber, '0').split('').map(Number);

  // Add binary value X to the twos complement of binary value Y
  const resultBinaryX = binaryValueX.split('').map(Number);
  const resultBinaryY = twosComplementY;
  const carry = resultBinaryX.reduceRight((carry, bit, index) => {
    const sum = bit + resultBinaryY[index] + carry;
    resultBinaryX[index] = sum % 2;
    return sum > 1 ? 1 : 0;
  }, 0);

  // Handle overflow
  if (carry) {
    // Overflow occurred, handle as needed (e.g., wrap around)
    console.warn('Overflow occurred during binary addition.');
  }

  return resultBinaryX;
};



// The main calculateBinaryResult function
const calculateBinaryResult = () => {
  // Determine which operation to perform
  const resultBinary = operation === '+' ? calculateBinaryAddition() : calculateBinarySubtraction();

  return resultBinary;
};



  const generateColumns = () => {
    const columns = [];

    columns.push(
      <div key="extra-column" className="column text-navy">
        {Array.from({ length: 2 }).map((_, index) => (
          <div key={index} className="empty-space"></div>
        ))}
        <ToggleButtonArray index={-1} isSpecialButton={true} onChange={handleOperationChange} />
      </div>
    );

    for (let i = selectedNumber - 1; i >= 0; i--) {
      columns.push(
        <div key={i} className="column text-navy">
          <MathJax>{`\\[${Math.pow(2, i)}\\]`}</MathJax>
          <ToggleButtonArray index={i} onChange={(value) => handleBinaryChangeTop(i, value)} />
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
              Binary +/- Calculator
            </h1>
            <div className="flex flex-col w-full items-center">
              <div className="flex items-center text-2xl text-navy">
                <label htmlFor="numberInput" className="mr-2">
                  <MathJax>{`\\[\\text{The number of bits in each number, } n =\\]`}</MathJax>
                </label>
                <select
                  id="numberInput"
                  value={selectedNumber}
                  onChange={handleNumberChange}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
                <div className="text-left text-2xl ml-10 text-navy">
                  <MathJax>{`\\[2^{n - 1} = 2^{${selectedNumber} - 1} = 2^{${selectedNumber - 1}} = ${Math.pow(2, selectedNumber - 1)}\\]`}</MathJax>
                </div>
              </div>
              <div>
                <p>Click a tile to toggle between 0 and 1, and click the "+" to toggle between +/-!</p>
              </div>
              <div className="flex mt-4 columns-container">{generateColumns()}</div>
              <div className="horizontal-line" style={{ width: `${(selectedNumber + 1) * 75}px` }}></div>
              {/* Display the result row */}
              <div className="result-row">
                <div className="column text-navy ml-35">
                  <MathJax>{`\\[\\qquad\\quad \\ \\ \\ \\ ${calculateBinaryResult().join(' \\quad \\ \\ \\text{      }')}\\]`}</MathJax>
                </div>
              </div>
              {/* Display binary values X and Y */}
              <div className="result-row">
                <div className="mt-40 ml-35">
                  <p>{`First binary number: ${binaryValueX}, Second binary number: ${binaryValueY}`}</p>
                  <p>{`Operation: ${operation}`}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MathJaxContext>
  );
}
