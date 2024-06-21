import React from "react";

const CartHeader = () => {
  return (
    <div className="flex justify-around items-center mt-10 font-semibold ml-20">
      <div className="w-36">Products</div>
      <div className="w-36">Title</div>
      <div className="w-36">Price</div>
      <div className="w-36">Quantity</div>
      <div className="w-36">Total</div>
      <div className="w-36">Remove</div>
    </div>
  );
};

export default CartHeader;
