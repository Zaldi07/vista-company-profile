import React from "react";
import about from "../asset/about1.png";
import Button from "./UI/Button";

const About = () => {
  return (
    <div className="h-screen w-full md:flex bg-white  pt-10 md:pt-0 " id="about">
      <div className="w-11/12  pl-10 flex flex-col justify-center items-center md:pt-10  md:w-1/2 md:h-full">
        <img className="h-[80%]" src={about} alt="" />
      </div>
      <div className="md:w-1/2 bg-white   md:pt-10 ml-4 flex flex-col justify-center">
        <div className="p-8">
          <h2 className="text-4xl">LOREM IPSUM</h2>
          <h2 className=" text-2xl font-bold pt-3">HEADING</h2>
          <h2 className=" text-sm md:text-md md:w-1/2 md:text-justify pt-3">
            Discover excellence with our construction company. We specialize in innovative projects, ensuring quality and timely delivery. Our experienced team, advanced
            technology, and sustainable practices guarantee success.
          </h2>
        </div>
        <div className="flex mx-auto md:mx-0">
          <button className="bg-indigo-600 text-white font-sans py-2 px-6 rounded md:ml-8 hover:bg-indigo-400  duration-500">Login</button>
        </div>
      </div>
    </div>
  );
};

export default About;
