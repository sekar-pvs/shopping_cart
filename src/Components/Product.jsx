import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import BreadCrums from "./BreadCrums";
import { ShopData } from "./Context/ShopContext";
import ProductDisplay from "./ProductDisplay";
import NewCollection from "./NewCollection/NewCollection";
const Product = () => {
  const { data } = useContext(ShopData);
  const { productId } = useParams();
  // console.log(productId);
  const Product = data.find((e) => e.id === Number(productId));
  //console.log(Product);

  return (
    <div className="h-screen space-y-10">
      <BreadCrums data={Product} />
      <ProductDisplay data={Product} />
      <NewCollection />
    </div>
  );
};

export default Product;
