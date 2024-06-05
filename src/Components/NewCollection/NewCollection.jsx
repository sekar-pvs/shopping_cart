import React from "react";
import new_collection from "../Assets/new_collections";
//import PopularCart from "../Popular/PopularCart";
import NewColl_Cart from "./NewColl_Cart";

const NewCollection = () => {
  console.log(new_collection);
  return (
    <div>
      <div className=" text-center text-4xl font-bold underline">
        New Collection
      </div>
      <div className=" grid grid-cols-4 space-y-10 ml-10 space-x-4">
        {new_collection.map((data) => {
          return (
            <div className="  bg-gradient-to-b from-purple-300 to-white text-black w-fit  rounded-2xl shadow-2xl  hover:scale-105 transition">
              <div className="flex justify-center p-3 ">
                <img
                  src={`${data.image}`}
                  alt="hi"
                  className=" h-52 rounded-xl "
                />
              </div>
              <div className="text-center">
                <div className="">{data.name}</div>
                <div>New Price : {data.new_price} $</div>
                <div className="font-light">Old Price : {data.old_price} $</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewCollection;
