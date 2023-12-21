// ToggleButtonArray.js
import React, { useState } from "react";
import { MathJax } from "better-react-mathjax";

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
    // For the special button, don't call onChange
    if (!isSpecialButton) {
      const newValue = binaryValue === 0 ? 1 : 0;
      setBinaryValue(newValue);
      onChange(newValue);
    }
  };

  return (
    <div className={`toggle-button-array ${isSpecialButton ? "special" : ""}`}>
      {isSpecialButton ? (
        <button className={`toggle-button ${binaryValue === 1 ? "active" : ""}`} onClick={handleButtonChange}>
          {/* Always render a plus sign in the special button */}
          <MathJax>{`\\[+\\]`}</MathJax>
        </button>
      ) : (
        <ToggleButton value={binaryValue} onChange={handleButtonChange} />
      )}
    </div>
  );
};

export default ToggleButtonArray;
