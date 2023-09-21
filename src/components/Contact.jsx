import React from "react";
import pp from "../asset/profile.jpg";

const Contact = () => {
  return (
    <div>
      <section className="bg-indigo-700 " id="contact">
        <div className="container mx-auto text-center pt-10 ">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-white text-2xl font-semibold mb-2">Our Teams</h2>
            <p className=" text-white mb-8  w-4/5 text-justify md:text-center md:w-1/2  text-xs md:text-lg">
              At the heart of our success is a dedicated team. With a wealth of experience and expertise, they drive our innovative construction projects forward. By harnessing
              advanced technology and embracing sustainable practices, our team ensures the timely delivery of quality structures, setting us apart in the industry.
            </p>
          </div>

          <div className="flex flex-wrap justify-center space-x-2 md:space-x-4  ">
            <div className="w-24 md:w-40 mb-4">
              <img src={pp} alt="Developer 1" className="w-full h-auto rounded-full" />
              <p className="text-white mt-2 font-semibold">Mr james</p>
            </div>
            <div className="w-24 md:w-40 mb-4">
              <img src={pp} alt="Developer 2" className="w-full h-auto rounded-full" />
              <p className="text-white mt-2 font-semibold">Mr zuck</p>
            </div>
            <div className="w-24 md:w-40 mb-4">
              <img src={pp} alt="Developer 3" className="w-full h-auto rounded-full" />
              <p className="text-white mt-2 font-semibold">Mrs Rafael</p>
            </div>
            <div className="w-24 md:w-40 mb-4">
              <img src={pp} alt="Developer 4" className="w-full h-auto rounded-full" />
              <p className="text-white mt-2 font-semibold">Mr Ronaldo</p>
            </div>
            <div className="w-24 md:w-40 mb-4">
              <img src={pp} alt="Developer 4" className="w-full h-auto rounded-full" />
              <p className="text-white mt-2 font-semibold">Mr Messi</p>
            </div>
            <div className="w-24 md:w-40 mb-4">
              <img src={pp} alt="Developer 4" className="w-full h-auto rounded-full" />
              <p className="text-white mt-2 font-semibold">Mr Pwidipai</p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex bg-sky-50  h-full p-4">
        <div className="w-1/2">
          <div className="md:flex md:gap-10 md:items-center px-3">
            <div className="pt-2">
              <span className="text-4xl text-indigo-700 mr-1 ">
                <ion-icon name="build-sharp"></ion-icon>
              </span>
            </div>
            <div className="text-indigo-700 pt-3">
              <h1 className="text-sm md:text-lg">
                <a href="">VISTABUILD</a>
              </h1>
              <h1 className="text-xs  md:text-md md:w-1/2 ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. A nam atque necessitatibus tenetur nemo veritatis assumenda,
              </h1>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <div className="md:flex gap-10 md:gap-20 justify-center md:items-center">
            <div className="md:pt-2 px-3 md:px-3">
              <div className=" text-sm cursor-pointer flex items-center   text-indigo-700">
                <span className="text-xl md:text-3xl text-indigo-700 mr-1 pt-2">
                  <ion-icon name="logo-instagram"></ion-icon>
                </span>
                COMPANY NAME
              </div>
              <div className=" text-sm cursor-pointer flex items-center  text-indigo-700">
                <span className="text-xl md:text-3xltext-indigo-700 mr-1 pt-2">
                  <ion-icon name="logo-twitter"></ion-icon>
                </span>
                COMPANY NAME
              </div>
            </div>
            <div className="md:pt-2 px-3 md:px-3">
              <div className=" text-sm cursor-pointer flex items-center   text-indigo-700">
                <span className="text-xl md:text-3xl text-indigo-700 mr-1 pt-2">
                  <ion-icon name="logo-instagram"></ion-icon>
                </span>
                COMPANY NAME
              </div>
              <div className=" text-sm cursor-pointer flex items-center  text-indigo-700">
                <span className="text-xl md:text-3xltext-indigo-700 mr-1 pt-2">
                  <ion-icon name="logo-twitter"></ion-icon>
                </span>
                COMPANY NAME
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
