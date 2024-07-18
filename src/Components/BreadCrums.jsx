import React from "react";
import { Link } from "react-router-dom";

const BreadCrums = ({ data }) => {
  return (
    <div className="flex md:ml-10 font-bold font-serif ">
      <div className="flex space-x- md:space-x-4 text-xs md:text-xl mt-4">
        <Link to="/">Home </Link>
        {` ->`}
        <Link to={`/${data.category}`}>{data.category} </Link> {` ->`}
        {data.name}
      </div>
    </div>
  );
};

export default BreadCrums;
