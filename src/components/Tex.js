import React from "react";
import "./app.css";
import { MathJax, MathJaxContext } from "better-react-mathjax";

export default function Tex() {
  return (
    <MathJaxContext version={3}>
      <section id="Tex" className="bg-lightgray mt-0 body-font">
        <div className="container px-5 mx-auto text-center lg:px-40">
          <div className="flex flex-col w-full mb-20">
            <h1 className="sm:text-3xl text-3xl font-medium text-left title-font mb-8 mt-10 text-navy">
              Basic LaTeX Editor
            </h1>
            {/* MathJax expression */}
            <MathJax>
              {`
                \\[
                E = mc^2
                \\]
              `}
            </MathJax>
          </div>
        </div>
      </section>
    </MathJaxContext>
  );
}