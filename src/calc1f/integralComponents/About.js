// src/components/About.js
import React from "react";
import "./integral.css";

export default function About() {

  return (
    <div className="integral">
    <section className="bg-lightgray mt-20 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
        <h1 className="sm:text-3xl text-3xl font-medium text-left title-font mb-20 text-navy">
            About This Page
          </h1>
        <h1 className="sm:text-7xl text-3xl font-medium title-font mb-5 gradient-text">
          Integral Calculator
        </h1>
          <p className="text-lg text-navy mt-10 leading-relaxed">
            <span className="text-2xl">
              A calculator to calculate integrals
            </span>
          </p>
          </div>
      </div>
    </section>
    </div>
  );
}