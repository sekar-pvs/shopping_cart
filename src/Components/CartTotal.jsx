import React, { useState } from "react";
//import { ToastContainer, toast } from "react-toastify";

const CartTotal = ({ data }) => {
  //let [Total, setTotal] = useState(data.reduce((a, c) => a + c.new_price, 0));
  let totalCost = data.reduce((a, c) => a + c.new_price, 0);

  //console.log(data);

  // Promo code
  const [promoData, setPromoData] = useState("");
  // Promo Code text box
  const handelPromo = (e) => {
    setPromoData(e.target.value);
  };
  // Promo Code button code
  const handelPromoButton = (d) => {
    console.log(d);
    // let reTotal;

    if (d === "PVS") {
      totalCost = totalCost - 30;
      // setTotal(Total);
    }
  };
  return (
    <div className="flex justify-around items-center ">
      {/*  Left */}
      <div className="w-[50%] space-y-5 p-5 md:p-0">
        <div className="text-2xl font-bold space-y-">Cart total</div>

        <div className="space-y-5">
          <div className="flex justify-between items-center text-xs md:text-base">
            <div>Sub Total</div>
            <div>{totalCost}$</div>
          </div>
          <hr />
          <div className="flex justify-between items-center text-xs md:text-base ">
            <div>Shipping Fee</div>
            <div>Free</div>
          </div>
          <hr />
          <div className="flex justify-between items-center text-xs md:text-base">
            <div>Total</div>
            <div>{totalCost}$</div>
          </div>
        </div>
      </div>
      {/*  Right */}
      <div className="space-y-3 p-5 md:p-0 text-xs md:text-base">
        <div>If you have a Promo code Please enter here</div>
        <div className="space-x-2">
          <input
            type="text"
            name=""
            id=""
            placeholder="Promo Code "
            className="border-2"
            onChange={handelPromo}
          />
          <button
            className="bg-black text-white p-2 text-xs md:text-base"
            onClick={() => handelPromoButton(promoData)}
          >
            Apply Now
          </button>
        </div>
        <div className="text-xs md:text-base">
          <button className="h-full border-2 p-2 bg-orange-500 text-white">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
