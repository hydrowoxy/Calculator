import React from "react";
import "./app.css";

export default function DigitalLogic() {
  return (
    <section id="DigitalLogic" className="bg-lightgray body-font">
      <div className="container px-5 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full">
          <h1 className="bold-left-header">
            Digital Logic
          </h1>
          <div className="flex justify-center pt-10">
            <a href="/digital-logic/binary-add" className="hover:text-binarydark landing-button">
            Binary Addition
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
