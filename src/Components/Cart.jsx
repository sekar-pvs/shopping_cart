import React, { useContext } from "react";
import Footer from "./Footer";
import { ShopData } from "./Context/ShopContext";
import CartHeader from "./CartComponent/CartHeader";
import removeIcon from "./Assets/cart_cross_icon.png";
import { IoCartOutline } from "react-icons/io5";
import CartTotal from "./CartTotal";

const Cart = () => {
  const { cartItem, setCartItem } = useContext(ShopData);
  //console.log(cartItem);
  const handelCartRemove = (Id) => {
    console.log(typeof Id);

    let removeCart = cartItem.filter((data) => Id !== data.id);
    setCartItem(removeCart);
  };
  /*  const totalCost = () => {
    let Total = 0;
    cartItem.map((d) => {
      Total = d.new_price + Total;
    });
    return Total;
  }; */

  return (
    <div className="space-y-10">
      <div className="space-y-10">
        <CartHeader />
        <hr />
        {cartItem.length < 1 ? (
          <div className="flex justify-center items-center font-mono font-extrabold text-4xl h-full">
            Your{" "}
            <IoCartOutline size={50} className=" ml-3 mr-3 text-purple-600" />{" "}
            is empty
          </div>
        ) : (
          <>
            {cartItem.map((data) => {
              return (
                <div className="space-y-2 mt-5" key={data.id}>
                  <div
                    className="flex justify-around items-center gap-6  "
                    key={data.id}
                  >
                    <div className="ml-20 w-36">
                      <img className="w-10" src={data.image} alt="..." />
                    </div>
                    <div className="text-xs w-36">{data.name}</div>
                    <div className=" w-36">${data.new_price}</div>
                    <div className=" w-36">1</div>
                    <div className=" w-36">{data.new_price}</div>
                    <div
                      className=" w-36"
                      onClick={() => {
                        handelCartRemove(data.id);
                      }}
                    >
                      <img src={removeIcon} alt="" />
                    </div>
                  </div>
                  <hr />
                </div>
              );
            })}
          </>
        )}
      </div>
      <CartTotal data={cartItem} />
      <Footer />
    </div>
  );
};

export default Cart;
