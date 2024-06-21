import React, { useContext } from "react";
import { ShopData } from "./Context/ShopContext";
import Card from "./Card";
import { RiArrowDropDownLine } from "react-icons/ri";
import Footer from "./Footer";

const ShopCategori = ({ category, banner }) => {
  const { data } = useContext(ShopData);
  return (
    <div className="space-y-10">
      <div className="shadow-2xl mt-3 h-3/4  flex justify-center items-center">
        <img src={banner} alt="" />
      </div>
      <div className=" ml-10 mr-10 flex justify-between ">
        <div className="font-bold text-xl font-serif">Happy To Purchase</div>
        <div>
          <button className="border-2 p-2 rounded-full flex text-center gap-2">
            Sort by <RiArrowDropDownLine />
          </button>
        </div>
      </div>
      <div className=" grid grid-cols-4 space-y-10 ml-10 space-x-4">
        {data.map((data) => {
          if (data.category === category) {
            return <Card data={data} key={data.id} />;
          } else {
            return null;
          }
        })}
      </div>
      <Footer />
    </div>
  );
};

export default ShopCategori;
