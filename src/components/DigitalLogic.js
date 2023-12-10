import React from "react";
import "./app.css";

export default function DigitalLogic() {
  return (
    <section id="Discrete" className="bg-lightgray body-font">
      <div className="container px-5 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full">
          <h1 className="sm:text-3xl text-3xl font-medium text-left title-font mb-8 mt-10 text-navy">
            Digital Logic
          </h1>
          <div className="flex justify-center pt-10">
            <a
              href="./"
              className="inline-flex text-navy bg-white py-4 px-9 hover:text-darkgreen hover:underline text-lg rounded shadow-md hover:shadow-md mr-10">
              Truth Table Generator
            </a>
            <a
              href="#projects"
              className="inline-flex text-navy bg-white py-4 px-9 hover:text-darkgreen hover:underline text-lg rounded shadow-md hover:shadow-md mr-10">
              Logic Gate Simulator
            </a>
            <a
              href="#projects"
              className="inline-flex text-navy bg-white py-4 px-9 hover:text-darkgreen hover:underline text-lg rounded shadow-md hover:shadow-md mr-10">
              Boolean to Verilog
            </a>
            <a
              href="#projects"
              className="inline-flex text-navy bg-white py-4 px-9 hover:text-darkgreen hover:underline text-lg rounded shadow-md hover:shadow-md mr-10">
              Binary Addition/Subtraction
            </a>
            <a
              href="#projects"
              className="inline-flex text-navy bg-white py-4 px-9 hover:text-darkgreen hover:underline text-lg rounded shadow-md hover:shadow-md">
              K-Map Calculator
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
