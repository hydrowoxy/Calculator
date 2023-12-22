import React from "react";

export default function About() {
    return (
        <div className="tex">
            
            <section className="bg-lightgray mt-20 body-font">

                <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                    <div className="flex flex-col w-full">

                        <h1 className="bold-left-header"> About This Page </h1>

                        <h1 className="title-orange"> Basic LaTeX Editor </h1>

                        <p className="description">
                            A basic LaTeX editor. You can type a short amount of LaTeX code and get a nicely formatted expression in the browser.
                            See the
                            {" "}<a href="https://www.latex-project.org/help/documentation/" className="text-texlight underline" target="_blank" rel="noopener noreferrer">LaTeX documentation</a> {" "}
                            for more information about writing TeX. You can also find useful information through
                            {" "}<a href="https://www.overleaf.com/learn" className="text-texlight underline" target="_blank" rel="noopener noreferrer">Overleaf</a>.
                        </p>

                    </div>
                </div>

            </section>

        </div>
    );
}
