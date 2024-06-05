import React from "react";
import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { IoMdMan } from "react-icons/io";
import { IoMdWoman } from "react-icons/io";
import { TbMoodKidFilled } from "react-icons/tb";
import { IoHome } from "react-icons/io5";

const Navfooter = () => {
  return (
    <footer className=" flex justify-around md:hidden p-3 ">
      <Link to={`/`}>
        <div>
          <IoHome size={40} className="text-purple-600 " />
        </div>
        <div className="">Home</div>
      </Link>
      <Link to={`/mens`}>
        <div>
          <IoMdMan size={40} className="text-purple-600 " />
        </div>
        <div className="">Men's</div>
      </Link>
      <Link to={`/womens`}>
        {" "}
        <div>
          <IoMdWoman size={40} className="text-purple-600" />
        </div>
        <div className="">Women's</div>
      </Link>
      <Link to={`/kids`}>
        {" "}
        <div>
          <TbMoodKidFilled size={40} className="text-purple-600" />
        </div>
        <div className="">Kid's</div>
      </Link>
    </footer>
  );
};

export default Navfooter;
