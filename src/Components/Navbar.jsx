import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
  const [open] = useState(false);
  const [hr, setHr] = useState("home");
  /*  const handelButton = () => {
    setOpen(!open);
  }; */
  return (
    <div className=" flex justify-around items-center m-1 bg-gradient-to-r from-white via-purple-500 to-pink-500 h-auto md:h-1/6 rounded">
      {/* This first div contain log and brand name  */}
      <div className="flex">
        <div className="h-1 w-24">
          <img src="logo.png" alt="shop logo" />
        </div>
        <div className="text-center mt-4 text-2xl font-mono">pvs shopify</div>
      </div>
      {/* Second contain two div 2.1 is "MENU LOGO(=)" 2.2 is "MENU LIST (HOME, MENS,...)" */}

      <div>
        {/*  <div className={`   md:hidden space-x-3 `}>
          <button onClick={handelButton}>{open ? "% close " : "= menu"}</button>
        </div> */}
        <div
          className={`ml-6 font-semibold  md:block ${
            open ? "block" : "hidden"
          }  `}
        >
          <ul className=" block md:flex  md:space-x-10  space-y-4 mt-5  md:space-y-0 md:mt-0">
            <li className="hover:scale-125 transition duration-75 ">
              {/* this button onclick function for set horizontal line for home */}
              <Link to={`/`}>
                <button
                  onClick={() => {
                    setHr("home");
                  }}
                >
                  Shop
                </button>{" "}
              </Link>
              {hr === "home" ? <hr /> : <></>}
            </li>
            <li className="hover:scale-125 transition duration-75 ">
              <Link to={"men"}>
                <button
                  onClick={() => {
                    setHr("men");
                  }}
                >
                  Men's
                </button>{" "}
              </Link>
              {hr === "men" ? <hr /> : <></>}
            </li>
            <li className="hover:scale-125 transition duration-75 ">
              <Link to={`/women`}>
                <button
                  onClick={() => {
                    setHr("women");
                  }}
                >
                  Women's
                </button>{" "}
              </Link>
              {hr === "women" ? <hr /> : <></>}
            </li>
            <li className="hover:scale-125 transition duration-75 ">
              <Link to={`/kid`}>
                <button
                  onClick={() => {
                    setHr("kid");
                  }}
                >
                  Kid's
                </button>{" "}
              </Link>
              {hr === "kid" ? <hr /> : <></>}
            </li>
            <li className="hover:scale-125 transition duration-75 ">
              <Link to={`/cart`}>
                <button
                  onClick={() => {
                    setHr("cart");
                  }}
                >
                  <div className="flex">
                    <div>
                      <IoCartOutline size={25} />
                    </div>
                    <div>Cart</div>
                  </div>
                </button>{" "}
              </Link>
              {hr === "cart" ? <hr /> : <></>}
            </li>
          </ul>
        </div>
      </div>
      <div className="font-semibold text-sm md:text-xl border-2 border-double border-white p-1 rounded-full md:w-24 w-20 text-center hover:scale-105 transition ">
        <Link to="/signup">
          <button>Sign up</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
