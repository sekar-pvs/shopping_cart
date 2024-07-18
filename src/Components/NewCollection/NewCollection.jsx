import React from "react";
import new_collection from "../Assets/new_collections";
import { Link } from "react-router-dom";

const NewCollection = () => {
  return (
    <div className=" ">
      <div className=" text-center text-4xl font-bold underline ">
        New Collection
      </div>
      <div className="flex  overflow-x-auto  md:grid md:grid-cols-4  space-y-10  space-x-2 ml-2 md:ml-10  mt-10  mb-10 h-96 md:h-full ">
        {new_collection.map((data) => {
          return (
            <Link
              to={`/product/${data.id}`}
              onClick={() => {
                window.scroll(0, 0);
              }}
              key={data.id}
            >
              <div className="  bg-gradient-to-b from-purple-300 to-white text-black w-72  rounded-2xl shadow-2xl  hover:scale-105 transition ">
                <div className="flex justify-center p-3 ">
                  <img
                    src={`${data.image}`}
                    alt="No img"
                    className=" h-52 rounded-xl "
                  />
                </div>
                <div className="text-center">
                  <div className="">{data.name}</div>
                  <div>New Price : {data.new_price} $</div>
                  <div className="font-light">
                    Old Price : {data.old_price} $
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default NewCollection;
