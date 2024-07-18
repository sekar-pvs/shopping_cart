import React from "react";
import handIcon from "./Assets/hand_icon.png";
import arrow from "./Assets/arrow.png";
import logoImg from "./Assets/hero_image.png";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className=" h-1/2 md:h-screen flex justify-between items-center  bg-gradient-to-br from-purple-300   to-white w-full relative md:p-36 p-3">
      {/* left */}
      <div className="md:space-y-4 space-y-2 md:ml-20  ml-1 z-50 ">
        <div className="text-base md:text-xl text-gray-700  font-serif font-semibold">
          NEW ARRIVALS ONLY
        </div>
        <div className="text-2xl md:text-5xl flex items-center space-x-4 font-serif">
          <div>New</div>
          <div>
            <img
              src={handIcon}
              alt="hand Icon"
              className="h-16 w-16 md:h-20 md:w-20"
            />
          </div>
        </div>
        <div>
          <div className="text-2xl md:text-5xl">Collections </div>
          <div className="text-2xl md:text-5xl">for eveyone</div>
        </div>
        <div className="text-base md:text-2xl space-y-2 p-2 border-2  border-white bg-red-500 text-white rounded-3xl hover:scale-105 transition  text-center flex space-x-3  w-fit ">
          <div
            onClick={() => {
              window.scroll(0, 0);
            }}
          >
            <Link to="/men">
              <button className=" ">Latest Collections </button>
            </Link>
          </div>
          <div className="text-center flex items-center">
            <img src={arrow} alt="" />
          </div>
        </div>
      </div>

      {/* right */}
      <div className=" object-left absolute md:left-1/2 md:top-10  top-16 left-44 ">
        <div>
          <img src={logoImg} alt="" className=" md:w-[60%] " />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
