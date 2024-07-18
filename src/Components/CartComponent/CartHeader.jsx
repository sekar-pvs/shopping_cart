import React from "react";

const CartHeader = () => {
  return (
    <div className="flex justify-around items-center mt-10 font-semibold md:ml-20 ">
      <div className="w-15 md:w-36 text-xs md:text-base">Products</div>
      <div className="w-15 md:w-36 text-xs md:text-base">Title</div>
      <div className="w-15 md:w-36 text-xs md:text-base">Price</div>
      <div className="w-15 md:w-36 text-xs md:text-base">Quantity</div>
      <div className="w-15 md:w-36 text-xs md:text-base">Total</div>
      <div className="w-15 md:w-36 text-xs md:text-base">Remove</div>
    </div>
  );
};

export default CartHeader;
