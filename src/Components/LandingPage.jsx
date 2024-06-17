import React from "react";
import handIcon from "./Assets/hand_icon.png";
import arrow from "./Assets/arrow.png";
import logoImg from "./Assets/hero_image.png";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className=" h-[90%] flex justify-between items-center bg-gradient-to-br from-purple-300   to-white w-full ">
      {/* left */}
      <div className="space-y-4 ml-20  ">
        <div className="text-xl text-gray-700  font-serif font-semibold">
          NEW ARRIVALS ONLY
        </div>
        <div className="text-5xl flex items-center space-x-4 ">
          <div>new</div>
          <div>
            <img src={handIcon} alt="hand Icon" className="h-20 w-20" />{" "}
          </div>
        </div>
        <div className="text-5xl">collections </div>
        <div className="text-5xl">for eveyone</div>
        <div className="text-2xl space-y-2 p-2 boreder border-2  border-white bg-red-500 text-white rounded-3xl hover:scale-105 transition  text-center flex space-x-3  ">
          <div>
            <Link to="/">
              <button className=" ">Latest Collections </button>{" "}
            </Link>
          </div>
          <div className="text-center flex items-center">
            <img src={arrow} alt="" />
          </div>
        </div>
      </div>

      {/* right */}
      <div className=" object-left ">
        <div>
          <img src={logoImg} alt="" className="w-[60%] " />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
