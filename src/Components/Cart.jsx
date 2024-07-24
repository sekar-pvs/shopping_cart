import React, { useContext } from "react";
import Footer from "./Footer";
import { ShopData } from "./Context/ShopContext";
import CartHeader from "./CartComponent/CartHeader";
import removeIcon from "./Assets/cart_cross_icon.png";
import { IoCartOutline } from "react-icons/io5";
import CartTotal from "./CartTotal";
import Navfooter from "./Navfooter";

const Cart = () => {
  const { cartItem, setCartItem } = useContext(ShopData);
  //console.log(cartItem);
  const handelCartRemove = (Id) => {
    // console.log(typeof Id);

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
    <div className="space-y-10 h-[100%] relative">
      <div className="space-y-10">
        {cartItem.length < 1 ? (
          <div className="flex justify-center items-center font-mono font-extrabold text-2xl md:text-4xl h-full p-5">
            Your
            <IoCartOutline size={50} className=" ml-3 mr-3 text-purple-600" />
            is empty
          </div>
        ) : (
          <>
            <CartHeader />
            <hr />
            {cartItem.map((data) => {
              return (
                <div className="space-y-2 mt-5" key={data.id}>
                  <div
                    className="flex justify-around items-center gap-6  "
                    key={data.id}
                  >
                    <div className="md:ml-20 w-15 md:w-36">
                      <img className="w-10" src={data.image} alt="..." />
                    </div>
                    <div className=" w-5 md:w-36 text-xs ">{data.name}</div>
                    <div className="w-15 md:w-36">${data.new_price}</div>
                    <div className="w-15 md:w-36">1</div>
                    <div className="w-15 md:w-36">{data.new_price}</div>
                    <div
                      className="w-15 md:w-36"
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
      <div className="sticky bottom-0">
        <Navfooter />
      </div>
    </div>
  );
};

export default Cart;
