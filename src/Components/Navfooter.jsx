import React from "react";
import { Link } from "react-router-dom";
import { TbMoodKidFilled } from "react-icons/tb";
import {
  IoCartOutline,
  IoHomeOutline,
  IoManOutline,
  IoWomanOutline,
} from "react-icons/io5";

const Navfooter = () => {
  return (
    <footer className=" flex justify-around md:hidden p-3 bg-white">
      <Link to={`/`} onClick={() => window.scroll(0, 0)}>
        <div className="flex flex-col items-center justify-center">
          <div>
            <IoHomeOutline size={30} className="text-purple-500  " />
          </div>
          <div className="">Home</div>
        </div>
      </Link>
      <Link to={`/men`} onClick={() => window.scroll(0, 0)}>
        <div className="flex flex-col items-center justify-center">
          <div>
            <IoManOutline size={30} className="text-purple-500 " />
          </div>
          <div className="">Men's</div>
        </div>
      </Link>
      <Link to={`/women`} onClick={() => window.scroll(0, 0)}>
        <div className="flex flex-col items-center justify-center">
          <div>
            <IoWomanOutline size={30} className="text-purple-500" />
          </div>
          <div className="">Women's</div>
        </div>
      </Link>
      <Link to={`/kid`} onClick={() => window.scroll(0, 0)}>
        <div className="flex flex-col items-center justify-center">
          <div className="text-center">
            <TbMoodKidFilled size={30} className="text-purple-500 " />
          </div>
          <div className="text-center">Kid's</div>
        </div>
      </Link>
      <Link to={`/cart`} onClick={() => window.scroll(0, 0)}>
        <div className="flex flex-col items-center justify-center">
          <div>
            <IoCartOutline size={30} className="text-purple-500 " />
          </div>
          <div className="">cart</div>
        </div>
      </Link>
    </footer>
  );
};

export default Navfooter;
