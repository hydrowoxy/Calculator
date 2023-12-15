import React from "react";
import "./integral.css";

export default function About() {
    return (
        <div className="integral">
            <section className="bg-lightgray mt-20 body-font">
                <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                    <div className="flex flex-col w-full">
                        <h1 className="sm:text-3xl text-3xl font-medium text-left title-font mb-20 text-navy">
                            About This Page
                        </h1>
                        <h1 className="sm:text-7xl text-3xl font-medium title-font gradient-text">
                            Integral Calculator
                        </h1>
                        <p className="text-lg text-navy mt-7 leading-relaxed">
                            <span className="text-2xl">
                                A calculator to calculate integrals. This uses the same computational process as{" "}
                                <a href="https://integral-calculator.com" className="text-integraldark underline" target="_blank" rel="noopener noreferrer">
                                    integral-calculator.com
                                </a>. The dev was kind enough to share how it works, so I tried to make something similar for my own learning.
                            </span>
                        </p>
                        <div>
                            <span style={{ fontSize: "1.5rem" }}  className="text-navy">Visit </span>
                            <a href="https://integral-calculator.com" className="text-integraldark underline" target="_blank" rel="noopener noreferrer" style={{ fontSize: "1.5rem" }}>
                                integral-calculator.com
                            </a>
                            <span style={{ fontSize: "1.4rem" }}>!</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
