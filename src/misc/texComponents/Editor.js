import React, { useState, useRef } from "react";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import { buttonData } from "./buttonData";
import { toPng } from 'html-to-image';

const tabData = [
  { id: 'basic', title: 'Basic', buttons: buttonData.basic },
  { id: 'calculus', title: 'Calculus', buttons: buttonData.calculus },
  { id: 'arrows', title: 'Arrows', buttons: buttonData.arrows },
  { id: 'alphabetic', title: 'Alphabetic', buttons: buttonData.alphabetic },
  { id: 'functions', title: 'Functions', buttons: buttonData.functions },
  { id: 'fonts', title: 'Fonts', buttons: buttonData.fonts },
  { id: 'discrete', title: 'Discrete', buttons: buttonData.discrete },
  { id: 'formulas', title: 'Formulas', buttons: buttonData.formulas },
];

export default function Editor() {
  const [latexCode, setLatexCode] = useState("\\int_{a}^{b} \\sin(x^2) dx ");
  const [activeTab, setActiveTab] = useState("basic");
  const mathjaxContainerRef = useRef(null);

  const handleLatexCodeChange = (event) => {
    setLatexCode(event.target.value);
  };

  const handleButtonClick = (symbol) => {
    const inputElement = document.getElementById('latexCode');
    const startPos = inputElement.selectionStart;
    const endPos = inputElement.selectionEnd;

    // Insert the symbol with spaces on either side at the cursor position
    const newLatexCode =
      latexCode.substring(0, startPos) + ' ' + symbol + ' ' + latexCode.substring(endPos);

    // Update the state with the new LaTeX code
    setLatexCode(newLatexCode);

    // Move the cursor to the end of the inserted symbol
    const newCursorPos = startPos + symbol.length + 2; // +2 for the added spaces
    inputElement.setSelectionRange(newCursorPos, newCursorPos);

    // Focus back on the input field
    inputElement.focus();
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleDownloadImage = () => {
    // Use toPng to convert the MathJax container to PNG
    toPng(mathjaxContainerRef.current)
      .then((dataUrl) => {
        // Create a temporary link to download the PNG
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'latex_image.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((error) => {
        console.error('Error generating PNG:', error);
        window.alert('Error generating PNG. Please try again.'); 
      });
  };

  return (
    <MathJaxContext version={3}>
      <div className="tex">

        <section className="bg-lightgray mt-0 body-font">

          <div className="container px-5 mx-auto text-center lg:px-40">
            <div className="flex flex-col w-full mb-20">

              <h1 className="bold-left-header">Basic LaTeX Editor</h1>
              {/* Input field for LaTeX code */}
              <p className="text-left description">Enter LaTeX code...</p>
              <div className="text-left sub-description">
                <input
                  type="text"
                  id="latexCode"
                  name="latexCode"
                  value={latexCode}
                  onChange={handleLatexCodeChange}
                  className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-texlight focus:ring-2 focus:ring-texlight w-full"
                />
              </div>

              {/* Tabs */}
              <div className="justify-center mb-4 mt-10 flex space-x-4">
                {tabData.map((tab) => (
                  <button
                    key={tab.id}
                    className={`bg-white text-md text-navy px-4 py-2 rounded-md ${activeTab === tab.id ? 'bg-texlight' : ''}`}
                    onClick={() => handleTabChange(tab.id)}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>

              {/* Buttons for inserting symbols based on the active tab */}
              <div className="flex justify-center text-center px-4">
                
                {/* Buttons for inserting symbols based on the active tab */}
                <div className="flex flex-wrap space-x-4 mb-4 mt-4">
                  {tabData.map((tab) => (
                    activeTab === tab.id && tab.buttons && (
                      tab.buttons.map((button, index) => (
                        <React.Fragment key={button.id}>
                          <button
                            className={`bg-white ring-2 text-navy ring-gray-200 focus:outline-none focus:border-texdark focus:ring-2 focus:ring-texdark text-sm focus:text-texdark mt-4 mb-8 px-6 py-0 rounded-md`}
                            onClick={() => handleButtonClick(button.latex)}
                          >
                            <div className="flex items-center justify-center" style={{ height: "100%" }}>
                              <MathJax className="text-xl text-navy">{button.icon}</MathJax>
                            </div>
                          </button>
                          {(index + 1) % 20 === 0 && <br />}
                        </React.Fragment>
                      ))
                    )
                  ))}
                </div>
              </div>


              {/* Display the TeX with MathJax */}
              <div
                ref={mathjaxContainerRef}
                className="rounded-lg overflow-hidden bg-white p-4 shadow-lg flex items-center justify-center"
                style={{ height: "200px" }}
              >
                <MathJax
                  className="text-3xl text-navy"
                  style={{ width: "100%" }}
                >{`\\[${latexCode}\\]`}</MathJax>
              </div>

              {/* Download button */}
              <button
                className="bg-texlight text-navy hover:underline px-4 py-2 rounded-md mt-12"
                onClick={handleDownloadImage}
              >
                Download as PNG
              </button>

            </div>
          </div>
          
        </section>

      </div>
    </MathJaxContext>
  );
}
