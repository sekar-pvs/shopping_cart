import React from "react";
import { Link } from "react-router-dom";

const BreadCrums = ({ data }) => {
  return (
    <div className="flex ml-10">
      <div className="flex space-x-4">
        {" "}
        <Link to="/">Home</Link> {` ->`}
        <Link to={`/${data.category}`}>{data.category} </Link> {` ->`}{" "}
        {data.name}
      </div>
    </div>
  );
};

export default BreadCrums;
