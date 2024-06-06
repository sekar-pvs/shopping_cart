import React from "react";
import insta from "./Assets/instagram_icon.png";
import whats from "./Assets/whatsapp_icon.png";
import printrest from "./Assets/pintester_icon.png";

const Footer = () => {
  return (
    <div className=" space-y-6 text-center mb-4 ">
      <div className=" flex justify-center items-center text-center ">
        <div>
          <img src="logo.png" alt="" className="h-36" />
        </div>
        <div className=" flex justify-center items-center font-bold text-4xl font-mono">
          pvs shopify
        </div>
      </div>
      <div>
        <ul className="flex justify-center items-center space-x-4 ml-2">
          <li>Company</li>
          <li>Products</li>
          <li>Offers</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="flex justify-center items-center space-x-6">
        <img src={whats} alt="" />
        <img src={insta} alt="" />
        <img src={printrest} alt="" />
      </div>
    </div>
  );
};

export default Footer;
