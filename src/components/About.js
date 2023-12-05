// src/components/About.js
import React, { useEffect } from "react";
import startTypingAnimation from "./typingAnimation";
import "./app.css";

export default function About() {
    // Start the typing animation when the component mounts
    useEffect(() => {
      startTypingAnimation();
    }, []);

    useEffect(() => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
  
          const targetElement = document.querySelector(this.getAttribute('href'));
  
          if (targetElement) {
            const offsetTop = targetElement.offsetTop + 510; 
  
            window.scrollTo({
              top: offsetTop,
              behavior: 'smooth'
            });
          }
        });
      });
    }, []); // Empty dependency array to ensure it runs only once when the component mounts

  return (
    <section id="projects" className="bg-lightgray mt-20 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
        <h1 className="sm:text-3xl text-3xl font-medium text-left title-font mb-20 text-gray">
            About This Site
          </h1>
        <h1 className="sm:text-7xl text-3xl font-medium title-font mb-5 gradient-text">
          Assorted Calculators
        </h1>
        <h1 className="sm:text-1xl text-3xl font-medium title-font mb-5 text-black">
            <span className="main-text typing-text"></span>
          </h1>
          <p className="text-lg text-gray mt-10 leading-relaxed">
            <span className="text-2xl">
              Some calculators for various math and computer science courses.
            </span>
          </p>
          </div>
      </div>
    </section>
  );
}