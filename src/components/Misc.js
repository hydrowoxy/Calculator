import React from "react";
import "./app.css";

export default function Misc() {
  return (
    <section id="Misc" className="bg-lightgray body-font ">
      <div className="container px-5 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full">
          <h1 className="sm:text-3xl text-3xl font-medium text-left title-font mb-8 mt-10 text-navy">
            Miscellaneous
          </h1>
          <div className="flex justify-center pt-10 pb-20">
            <a
              href="/misc/tex"
              className="inline-flex text-navy bg-white py-4 px-9 hover:text-texlight hover:underline text-lg rounded shadow-md hover:shadow-md"
            >
              Basic LaTeX Editor
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}