import React from "react";
const NewColl_Cart = ({ data }) => {
  //console.log("data" + data);
  return (
    <div className=" bg-gradient-to-b from-purple-300 to-white text-black w-fit  rounded-2xl shadow-2xl  hover:scale-105 transition">
      <div className="flex justify-center p-3 ">
        <img src={`${data.image}`} alt="hi" className="h-52 rounded-xl  " />
      </div>
      <div className="text-center">
        <div>{data.name}</div>
        <div>New Price : {data.new_price} $</div>
        <div className="font-light">Old Price : {data.old_price} $</div>
      </div>
    </div>
  );
};

export default NewColl_Cart;
