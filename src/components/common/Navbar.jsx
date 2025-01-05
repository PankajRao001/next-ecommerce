"use client";
import React, { useState, useEffect } from "react";
import { NAVBAR_LIST } from "./Helper";

const Navbar = () => {
  const [Open, setOpen] = useState(false);

  // Add or remove overflow-hidden on body when navbar is open
  useEffect(() => {
    if (Open) {
      document.body.style.overflow = "hidden"; // Hide body scroll when navbar is open
    } else {
      document.body.style.overflow = "auto"; // Restore body scroll when navbar is closed
    }
    return () => {
      document.body.style.overflow = "auto"; // Cleanup on component unmount
    };
  }, [Open]);

  return (
    <>
      <nav className="flex items-center justify-between drop-shadow-2xl shadow-sky-700 shadow-2xl h-[90px] px-2 w-full py-3 bg-white">
        <div className="flex items-center">
          <a href="/" className="font-bold text-2xl tracking-tight">
            Next.js
          </a>
        </div>
        <div
          className={`flex items-center max-md:min-h-screen z-20 bg-white max-md:top-0 max-md:w-full transition-all max-md:flex-col justify-center gap-5 max-md:fixed ${
            Open ? "max-md:right-0" : "max-md:-right-[200%]"
          }`}
        >
          {NAVBAR_LIST.map((obj, index) => (
            <a
              href={obj.href}
              onClick={() => setOpen(false)}
              key={index}
              className="text-sm cursor-pointer group relative duration-300 text-black hover:text-gray-700 font-medium"
            >
              <span className="absolute group-hover:bg-black right-0 group-hover:left-0 h-0.5 bottom-0 duration-500 w-0 group-hover:w-full"></span>
              {obj.title}
            </a>
          ))}
        </div>
        <div
          className="group md:hidden gap-0.5 group z-30 relative flex flex-col items-start justify-start w-5"
          onClick={() => setOpen(!Open)}
        >
          <span
            className={`bg-black w-full duration-300 h-0.5 ${
              Open ? "rotate-45 translate-y-1" : "rotate-0"
            }`}
          ></span>
          <span
            className={`bg-black w-[75%] duration-300 h-0.5 ${
              Open ? "hidden" : "rotate-0"
            }`}
          ></span>
          <span
            className={`bg-black w-[50%] duration-300 h-0.5 ${
              Open ? "-rotate-45 !w-full" : "rotate-0"
            }`}
          ></span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
