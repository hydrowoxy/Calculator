// src/components/About.js
import React from "react";
import "./binaryadd.css";

export default function About() {
    return (
        <div className="binaryadd">
            <section className="bg-lightgray mt-20 body-font">
                <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                    <div className="flex flex-col w-full">
                        <h1 className="sm:text-3xl text-3xl font-medium text-left title-font mb-20 text-navy">
                            About This Page
                        </h1>
                        <h1 className="sm:text-7xl text-3xl font-medium title-font gradient-text">
                            Binary Addition/Subtraction
                        </h1>
                        <p className="text-lg text-navy mt-7 mb-10 leading-relaxed">
                            <span className="text-2xl">
                                This can be used to add or subtract two n-bit binary numbers. It can also be used to find the 2's complement of an n-bit binary number.
                            </span>
                        </p>
                        <p>
                            <span className="text-xl">
                                Manual subtraction can be accomplished using the 2's complement method. To accomplish "a-b", you start with the positive binary
                                representation of "b", turn it negative using the 2's complement of it, and then add negative b to a. To illustrate the idea, it is like viewing
                                "10 - 5" as "10 + (-5)".
                            </span>
                        </p>
                        <p>
                            <span className="text-xl">
                                The signed magnitude method is used; this means the most significant bit (far left) represents the number's sign (0 = (+)ve, 1 = (-)ve),
                                and the remaining bits represent the magnitude of the number.
                            </span>
                        </p>
                        <div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
