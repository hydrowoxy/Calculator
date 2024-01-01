import React from "react";
import "./app.css";

export default function Calc1() {
  return (
    <section id="Calc1" className="bg-lightgray body-font ">
      <div className="container px-5 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full">
          <h1 className="bold-left-header">
            Calculus I
          </h1>
          <div className="flex justify-center pt-10">
            <a href="/calc-1/integral-calculator" className="hover:text-integraldark landing-button">
              Integral Calculator
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
