import React from "react";
import "./app.css";

export default function Misc() {
  return (
    <section id="Misc" className="bg-lightgray body-font ">
      <div className="container px-5 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full">
          <h1 className="bold-left-header">
            Miscellaneous
          </h1>
          <div className="flex justify-center pt-10 pb-20">
            <a href="/misc/tex" className="hover:text-texlight landing-button">
            Basic LaTeX Editor
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
