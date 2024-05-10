import React from "react";
import Button from "../layouts/Button";
import about from "../assets/Img/about.png";


const About = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5">
        <img src={about} alt="img" />
        <div className="space-y-4 lg:pt-14">
          <h1 className="font-semibold text-4xl text-center md:text-start">Why Choose Us?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            necessitatibus quam eligendi, ipsum reiciendis magnam ad ullam
            deleniti sed dicta, porro tempore minima perspiciatis ducimus! Error
            suscipit vitae asperiores quibusdam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            necessitatibus quam eligendi, ipsum reiciendis magnam ad ullam
            deleniti sed dicta, porro tempore minima perspiciatis ducimus! Error
            suscipit vitae asperiores quibusdam.
          </p>
          <div className="flex justify-center lg:justify-start">
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
