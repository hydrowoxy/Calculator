// src/components/About.js
import React from "react";
import "./app.css";

export default function Calc1() {
  return (
    <section id="Calc1" className="bg-lightgray body-font">
      <div className="container px-5 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full">
          <h1 className="sm:text-3xl text-3xl font-medium text-left title-font mb-8 mt-10 text-gray">
            Calculus 1
          </h1>
          <div className="flex justify-center pt-10">
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