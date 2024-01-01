import React from "react";
import { MathJaxContext } from "better-react-mathjax";

export default function About() {
  return (
    <MathJaxContext version={3}>
      <div className="binaryadd">

        <section className="bg-lightgray mt-20 body-font">
          <div className="container px-5 py-10 mx-auto text-center lg:px-40">
            <div className="flex flex-col w-full">

              <h1 className="bold-left-header">About This Page</h1>
              <h1 className="title-teal">Binary Addition Calculator</h1>

              <p className="description">This can be used to add two \(n\)-bit binary numbers.</p>
              <p className="sub-description">
                Wanted to subtract? Manual subtraction can be accomplished using the
                {" "}<a href="https://en.wikipedia.org/wiki/Two%27s_complement" className="text-binarydark underline" target="_blank" rel="noopener noreferrer">2's complement method.</a>{" "}
                To accomplish \(A - B\), you start with the positive binary
                representation of \(B\), turn it negative using the 2's complement of it, and then add negative \(B\) to \(A\). To illustrate the idea, it is like viewing
                \(10 - 5\) as \(10 + (-5)\). The
                {" "}<a href="https://en.wikipedia.org/wiki/Signed_number_representations" className="text-binarydark underline" target="_blank" rel="noopener noreferrer">signed magnitude method</a>{" "}
                is often used; this means the most significant bit (far left) represents the number's sign \(0 = (+)ve, 1 = (-)ve\),
                and the remaining bits represent the magnitude of the number.
              </p>

            </div>
          </div>

        </section>

      </div>
    </MathJaxContext>
  );
}
