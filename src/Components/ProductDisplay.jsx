import React from "react";
import dullStar from "./Assets/star_dull_icon.png";
import star from "./Assets/star_icon.png";

const ProductDisplay = ({ data }) => {
  return (
    <div className=" m-3 flex justify-around  h-screen ">
      {/*  left align */}
      <div className="flex space-x-5 ">
        <div className="w-28 space-y-2">
          <div>
            <img src={data.image} alt="" />
          </div>
          <div>
            <img src={data.image} alt="" />
          </div>
          <div>
            <img src={data.image} alt="" />
          </div>
        </div>
        <div className="">
          <img
            src={data.image}
            alt=""
            className="w-full shadow-2xl rounded-xl"
          />
        </div>
        <div></div>
      </div>
      {/*  right align */}

      <div className="space-y-4 w-1/2">
        <div className="">
          <div className="font-bold text-3xl">{data.name}</div>
          <div className="flex mt-4">
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={dullStar} alt="" />
          </div>
        </div>
        <div className="text-xl flex space-x-3 mt-3">
          <div className=" line-through font-thin">${data.old_price} </div>
          <div className=" text-orange-600 font-bold ">${data.new_price} </div>
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ea
          nesciunt adipisci dolore explicabo impedit unde vel ex modi. Ullam
          mollitia dolores eaque veniam maiores vitae nulla nisi esse aliquid.
        </div>
        <div className="space-y-2">
          <div className="font-semibold">Select Size</div>

          <div className="space-x-5 flex ">
            <div className="border-2 p-2">
              <button>S</button>
            </div>
            <div className="border-2 p-2">
              <button>M</button>
            </div>
            <div className="border-2 p-2">
              <button>L</button>
            </div>
            <div className="border-2 p-2">
              <button>XL</button>
            </div>
            <div className="border-2 p-2">
              <button>XXL</button>
            </div>
          </div>
        </div>
        <div>
          <span className="booder-2 bg-orange-500 p-3 text-white ">
            ADD TO CART
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
