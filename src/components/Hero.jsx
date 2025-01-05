import React from "react";
import Navbar from "./common/Navbar";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="bg-black min-h-[100vh] drop-shadow-2xl grow items-center justify-center flex flex-col">
      <div className="container">
        <Navbar />
      </div>
      <div className="container px-4 h-full grow-[1]">
        <div className="flex max-md:flex-col lg:pt-[100px] md:pt-20 sm:pt-16 pt-12">
          <div className="lg:w-6/12 px-3 sm:col-8 flex flex-col items-center justify-center w-full">
            <p className="text-white text-xl lg:text-4xl font-bold font-mono">
              YOU CAN START YOUR START YOUR DREAM LIFE WITH US. SO YOU JOIN US
              OUR JOURNEY
            </p>
            <div className="text-start w-full mt-10">
              <button className="text-white group relative px-5 py-3 cursor-pointer bg-sky-400 float-start">
                Get Started
                <span className="bg-black w-4 h-4 absolute text-nowrap top-0 left-0 overflow-hidden flex items-center justify-center group-hover:outline outline-sky-400 px-1 group-hover:w-full duration-300 group-hover:h-full">
                  <p className=" pr-3 text-black group-hover:text-white duration-500 text-nowrap">Get Started</p>
                </span>
                <span className="w-4 h-4 duration-1000 absolute group-hover:bg-sky-400 bottom-0 right-0"></span>
              </button>
            </div>
          </div>
          <div className="lg:w-6/12 px-3 max-md:mt-5 sm:col-8 w-full">
            <Image
              src="/assets/images/png/img_girl.png"
              alt="girl in jacket"
              className="w-full"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
