import React, { useState } from "react";

const Order = ({ data }) => {
  console.log(data);
  const [add, setAdd] = useState("");
  const handelChange = (e) => {
    setAdd(e.target.value);
  };

  return (
    <div className="space-y-10">
      <div className="flex justify-around items-center ">
        {/* left order summary */}
        <div className="w-[50%]">
          <div className="text-2xl font-bold">Order Summary : </div>
          <div className="flex justify-around items-center mt-10 font-semibold ml-20">
            <div className="w-36">Title</div>
            <div className="w-36">Quantity</div>
            <div className="w-36">Price</div>
          </div>
          <div className="flex justify-around items-center mt-10 font-semibold ml-20">
            <div className="w-36">
              Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket
            </div>
            <div className="w-36  ">{1}</div>
            <div className="w-36">85 $</div>
          </div>
        </div>

        {/*  right address */}
        <div className="mt-10 font-semibold ml-20 space-y-6 w-[50%]">
          <div className=" ">Enter the Delivery Address </div>
          <div>
            <textarea
              name=""
              id=""
              className="w-96 h-40 border-2"
              value={add}
              onChange={handelChange}
            ></textarea>
          </div>
        </div>
      </div>
      <div
        className={` ${
          add.length === 0 ? "blur-sm" : "block"
        } flex items-center justify-center `}
      >
        <button className={"border-2 p-3 bg-orange-500 text-white"}>
          Process to Pay
        </button>
      </div>
    </div>
  );
};

export default Order;
