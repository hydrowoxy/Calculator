import React from "react";
import About from "./texComponents/About";
import Editor from "./texComponents/Editor";

export default function Tex() {
    return (
        <main className="text-gray-400 bg-lightgray body-font">
            <About />
            <Editor />
        </main>
    );
};