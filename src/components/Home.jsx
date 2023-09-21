import React from "react";
// import "./index.css";
import background from "../asset/bg.png";
import Nav from "./Nav";
import About from "./About";
import "./home.css";
import Contact from "./Contact";

const Home = () => {
  return (
    <div className="h-full w-full" id="home">
      <div className="flex items-center h-screen w-full  bg relative bg-cover ">
        <div className="  absolute md:bottom-0 md:left-0 p-10 pt-20 md:w-[30%] text-justify">
          <p className="text-4xl font-bold  pt-4 text-black">VistaBuild</p>
          <p className="text-sm font-medium pt-5 text-black">
            Dynamic construction firm specializing in innovative projects, delivering quality structures on time. Experienced team, advanced technology, sustainable practices
          </p>
        </div>
        <Nav></Nav>
      </div>
      <About></About>
      <Contact></Contact>
    </div>
  );
};

export default Home;
