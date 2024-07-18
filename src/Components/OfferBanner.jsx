import React from "react";
import exclusive_img from "./Assets/exclusive_image.png";
import { Link } from "react-router-dom";
const OfferBanner = () => {
  return (
    <div className="text-center flex justify-center items-center md:h-full h-96">
      <div className=" flex justify-around bg-gradient-to-br from-purple-300 to-white md:w-[70%] md:h-[70%] w-[90%] h-[50%]  ">
        {/*    left  */}
        <div className="flex  items-center">
          <div className="text-base md:text-xl space-y-2 md:space-y-4">
            <div className="text-3xl md:text-5xl font-semibold ">Exclusive</div>
            <div className=" text-2xl md:text-5xl font-semibold">
              Offers For You
            </div>
            <div>ONLY ON BEST SELLERS PRODUCTS</div>
            <div>
              <button className=" border-2 p-2 bg-red-500 rounded-xl text-white hover:scale-105 transition">
                <Link to="/women" onClick={() => window.scroll(0, 0)}>
                  Check Now
                </Link>
              </button>
            </div>
          </div>
        </div>

        {/*    Right */}
        <div className="">
          <img src={exclusive_img} alt="" className="h-[100%]" />
        </div>
      </div>
    </div>
  );
};

export default OfferBanner;
