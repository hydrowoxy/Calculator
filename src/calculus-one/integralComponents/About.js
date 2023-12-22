import React from "react";

export default function About() {
    return (
        <div className="integral">
            <section className="bg-lightgray mt-20 body-font">
                <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                    <div className="flex flex-col w-full">

                        <h1 className="bold-left-header">About This Page</h1>
                        <h1 className="title-pink">Integral Calculator</h1>

                        <p className="description">
                                A calculator to calculate integrals. This uses the same computational process as{" "}
                                {" "}<a href="https://integral-calculator.com" className="text-integraldark underline" target="_blank" rel="noopener noreferrer">integral-calculator.com</a>.{" "}
                                The dev was kind enough to share how it works, so I tried to make something similar for my own learning. Visit
                                {" "}<a href="https://integral-calculator.com" className="text-integraldark underline" target="_blank" rel="noopener noreferrer">integral-calculator.com</a>!                        </p>

                    </div>
                </div>
            </section>
        </div>
    );
}
