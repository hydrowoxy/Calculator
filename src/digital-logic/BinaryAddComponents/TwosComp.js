import React, { useState } from "react";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import "./binaryadd.css";

const ToggleButton = ({ onChange }) => {
    const [value, setValue] = useState(0);
  
    const handleClick = () => {
      const newValue = value === 0 ? 1 : 0;
      setValue(newValue);
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

export default function TwosComp() {
  // State to store the selected number
  const [selectedNumber, setSelectedNumber] = useState(5);

  // Function to handle the change in the selected number
  const handleNumberChange = (e) => {
    setSelectedNumber(parseInt(e.target.value, 10));
  };

  // Calculate the result of the mathematical expression
  const result = Math.pow(2, selectedNumber - 1);


const generateColumns = () => {
  const columns = [];

  // Add the extra column with a ToggleButton for addition/subtraction
  columns.push(
    <div key="extra-column" className="column text-navy">
      {Array.from({ length: 2 }).map((_, index) => (
        <div key={index} className="empty-space"></div>
      ))}
      <ToggleButtonArray index={-1} isSpecialButton={true} />
    </div>
  );

  for (let i = selectedNumber - 1; i >= 0; i--) {
    columns.push(
      <div key={i} className="column text-navy">
        <MathJax>{`\\[${Math.pow(2, i)}\\]`}</MathJax>
        <ToggleButtonArray index={i} />
        <ToggleButtonArray index={i} />
      </div>
    );
  }

  return columns;
};

const ToggleButtonArray = ({ index, isSpecialButton }) => {
    const [binaryValue, setBinaryValue] = useState(0);
  
    const handleButtonChange = () => {
      const newValue = binaryValue === 0 ? 1 : 0;
      setBinaryValue(newValue);
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


  return (
  <MathJaxContext version={3}>
    <div className="binaryadd">
      <section className="bg-lightgray mt-20 body-font">
        <div className="container mx-auto px-5 py-10 text-center lg:px-40">
          <h1 className="sm:text-3xl text-3xl font-medium text-left title-font mb-14 text-navy">
            2's Complement Calculator
          </h1>
          <div className="flex flex-col w-full items-center">
              <div className="flex items-center text-2xl text-navy">
                <label htmlFor="numberInput" className="mr-2">
                  The number of bits in the number, n =
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
                  <MathJax>{`\\[2^{n - 1} = 2^{${selectedNumber} - 1} = 2^{${selectedNumber - 1}} = ${result}\\]`}</MathJax>
                </div>
              </div>
              <div>
              <p>Click a tile to toggle between 0 and 1</p>
            </div>
            <div className="flex mt-4 columns-container">{generateColumns()}</div>
            {/* Dynamically calculate the width of the horizontal line */}
            <div className="horizontal-line" style={{ width: `${(selectedNumber + 1) * 75}px` }}></div>
          </div>
        </div>
      </section>
    </div>
  </MathJaxContext>
  );
}
