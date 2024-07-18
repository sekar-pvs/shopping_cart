import React, { useContext } from "react";
import dullStar from "./Assets/star_dull_icon.png";
import star from "./Assets/star_icon.png";
import { ShopData } from "./Context/ShopContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDisplay = ({ data }) => {
  const { cartItem, setCartItem, sizeBG, setSizeBg } = useContext(ShopData);
  const handelCartButton = () => {
    window.scroll(0, 0);
    setCartItem([...cartItem, data]);
    toast.success("Sucessfully Added to Cart");
  };

  //console.log(cartItem);
  return (
    <div className=" m-3 md:flex justify-around  ">
      {/*  left align */}
      <div className="flex space-x-5 ">
        <div className="md:w-28 w-36  space-y-2">
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
            className="md:w-full w-96 shadow-2xl rounded-xl"
          />
        </div>
        <div></div>
      </div>
      {/*  right align */}

      <div className="space-y-4 md:w-1/2">
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

          <div className={"space-x-5 flex flex-nowrap overflow-y-auto "}>
            <div
              className={`${
                sizeBG === "S" ? "bg-orange-500 text-white" : "bg-white"
              } border-2   text-center`}
            >
              <button
                className="p-2 w-16"
                onClick={() => {
                  setSizeBg("S");
                }}
              >
                S
              </button>
            </div>
            <div
              className={`${
                sizeBG === "M" ? "bg-orange-500 text-white" : "bg-white"
              } border-2  text-center`}
            >
              <button
                className="p-2 w-16"
                onClick={() => {
                  setSizeBg("M");
                }}
              >
                M
              </button>
            </div>
            <div
              className={`${
                sizeBG === "L" ? "bg-orange-500 text-white" : "bg-white"
              } border-2 text-center`}
            >
              <button
                className="p-2  w-16 "
                onClick={() => {
                  setSizeBg("L");
                }}
              >
                L
              </button>
            </div>
            <div
              className={`${
                sizeBG === "XL" ? "bg-orange-500 text-white" : "bg-white"
              } border-2  text-center`}
            >
              <button
                className="p-2  w-16  "
                onClick={() => {
                  setSizeBg("XL");
                }}
              >
                XL
              </button>
            </div>
            <div
              className={`${
                sizeBG === "XXL" ? "bg-orange-500 text-white" : "bg-white"
              } border-2  text-center`}
            >
              <button
                className="p-2  w-16 "
                onClick={() => {
                  setSizeBg("XXL");
                }}
              >
                XXL
              </button>
            </div>
          </div>
        </div>
        <div className="md:flex  justify-around space-x-5">
          <button
            className="booder-2 bg-orange-500 p-3 text-white font-bold  hover:scale-105 w-40 md:w-auto h-14"
            onClick={handelCartButton}
          >
            ADD TO CART
          </button>

          <button
            className="booder-2 bg-orange-500 p-3 text-white font-bold hover:scale-105 w-40 md:w-auto h-14 "
            /* onClick={handelCartButton} */
          >
            Order Now
          </button>

          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
