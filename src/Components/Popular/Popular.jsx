import React from "react";
import data_product from "../Assets/data";
import PopularCart from "./PopularCart";

const Popular = () => {
  return (
    <div className=" mt-7 ">
      <div className="space-y-7">
        <div className="text-2xl uppercase flex justify-center items-center font-semibold underline">
          popular womens
        </div>
        {/*   <hr style={{ color: "red" }} /> */}

        <div className="space-y-2 flex justify-center items-center space-x-2 ">
          {data_product.map((data) => {
            return (
              <div>
                <PopularCart key={data.id} data={data} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Popular;
