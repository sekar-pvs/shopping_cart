import React, { useContext, useState } from "react";
import { ShopData } from "./Context/ShopContext";
import Card from "./Card";
import { RiArrowDropDownLine } from "react-icons/ri";
import Footer from "./Footer";
import Navfooter from "./Navfooter";

const ShopCategori = ({ category, banner }) => {
  const { data } = useContext(ShopData);
  const [DataItem, setDataItem] = useState(data);
  const [openSort, setOpenSort] = useState(false);
  const [sortvalue, setSortvalue] = useState("AES");
  const [v, setV] = useState(false);

  const handelAppy = () => {
    let sort;
    if (sortvalue === "AES") {
      sort = DataItem.sort((a, b) => a.new_price - b.new_price);
      setDataItem(sort);
      setV(!v);
    }
    if (sortvalue === "DES") {
      sort = DataItem.sort((a, b) => b.new_price - a.new_price);
      setDataItem(sort);
      setV(!v);
    }
  };
  //console.log(DataItem);
  return (
    <div className="space-y-10">
      <div className="shadow-2xl mt-3 h-3/4  flex justify-center items-center">
        <img src={banner} alt="" />
      </div>
      <div className=" ml-10 mr-10 flex justify-between ">
        <div className="font-bold text-sm md:text-xl font-serif">
          Happy To Purchase
        </div>
        <div>
          <button
            className="border-2 p-2 rounded-full flex text-center  gap-2"
            onClick={() => {
              setOpenSort(!openSort);
            }}
          >
            Sort by <RiArrowDropDownLine className="text-center" />
          </button>
          <div className={`${openSort ? "block" : "hidden"} space-y-3`}>
            <div>
              <input
                type="radio"
                name="sort"
                id=""
                onClick={() => {
                  setSortvalue("AES");
                }}
              />{" "}
              Low TO High
            </div>
            <div>
              <input
                type="radio"
                name="sort"
                id=""
                onClick={() => {
                  setSortvalue("DES");
                }}
              />{" "}
              High To Low
            </div>
            <div
              className="text-center bg-orange-500 text-white rounded-xl p-2"
              onClick={handelAppy}
            >
              <button>Apply</button>
            </div>
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 space-y-10 w-96 md:w-auto md:ml-5 space-x-4 p-5">
        {DataItem.map((data) => {
          if (data.category === category) {
            return <Card data={data} key={data.id} />;
          } else {
            return null;
          }
        })}
      </div>
      <Footer />
      <div className="sticky bottom-0">
        <Navfooter />
      </div>
    </div>
  );
};

export default ShopCategori;
