import React from "react";
import exclusive_img from "./Assets/exclusive_image.png";
const OfferBanner = () => {
  return (
    <div className="text-center flex justify-center items-center h-full">
      <div className=" flex justify-around bg-gradient-to-br from-purple-300 to-white w-[70%] h-[70%]   ">
        {/*    left  */}
        <div className="flex  items-center">
          <div className="text-xl space-y-4">
            <div className="text-5xl font-semibold ">Exclusive</div>
            <div className="text-5xl font-semibold">Offers For You</div>
            <div>ONLY ON BEST SELLERS PRODUCTS</div>
            <div>
              <button className=" border-2 p-2 bg-red-500 rounded-xl text-white hover:scale-105 transition">
                Check Now
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
