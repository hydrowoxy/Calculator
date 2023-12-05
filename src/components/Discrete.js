// src/components/Calc1.js
import React from "react";
import "./app.css";

export default function Discrete() {
  return (
    <section id="Discrete" className="bg-lightgray mt-0 body-font">
      <div className="container px-5 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-3xl text-3xl font-medium text-left title-font mb-8 mt-10 text-gray">
            Discrete Math
          </h1>
          <div className="flex justify-center pb-10 pt-10">
            <a
              href="./"
              className="inline-flex text-white bg-gray border-0 pt py-4 px-9 focus:outline-none hover:text-pink text-lg rounded">
              Integral Calculator
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-white bg-gray border-0 py-4 px-9 focus:outline-none hover:text-pink text-lg rounded">
              Derivative Calculator
            </a>
          </div>
        </div> 
      </div>
    </section>
  );
}