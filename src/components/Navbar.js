import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-white md:sticky top-0 z-10 shadow-md">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="title-font font-medium text-black mb-4 md:mb-0">
          <a href="/" className="ml-3 text-xl mr-2">
            Assorted Calculators
          </a>
        </div>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#Calc1" className="mr-5 hover:bg-lightgray rounded mt-4 md:mt-0 px-2 py-1 hover:text-purple">
            Calculus I
          </a>
          <a href="#Calc2" className="mr-5 hover:bg-lightgray rounded mt-4 md:mt-0 px-2 py-1 hover:text-purple">
            Calculus II
          </a>
          <a href="#Calc3" className="mr-5 hover:bg-lightgray rounded mt-4 md:mt-0 px-2 py-1 hover:text-purple">
            Calculus III
          </a>
          <a href="#Discrete" className="mr-5 hover:bg-lightgray rounded mt-4 md:mt-0 px-2 py-1 hover:text-purple">
            Discrete Math
          </a>
          <a href="#DigitalLogic" className="mr-5 hover:bg-lightgray rounded mt-4 md:mt-0 px-2 py-1 hover:text-purple">
            Digital Logic
          </a>
          <a href="#Misc" className="mr-5 hover:bg-lightgray rounded mt-4 md:mt-0 px-2 py-1 hover:text-purple">
            Miscellaneous
          </a>
        </nav>
        <a
          href=""
          className="inline-flex items-center bg-white border-0 py-1 px-3 focus:outline-none hover:bg-navy text-navy hover:text-white rounded mt-4 md:mt-0"
        >
          How do these work?
          <ArrowRightIcon className="ml-3 w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}
