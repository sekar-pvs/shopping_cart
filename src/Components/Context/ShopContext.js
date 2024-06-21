import { createContext } from "react";
import all_product from "../Assets/all_product";
import { useState } from "react";

export const ShopData = createContext({});

const ShopContext = ({ children }) => {
  const data = all_product;
  // Add to Cart Variable and imort in ProductDisplay.jsx
  const [cartItem, setCartItem] = useState([]);
  //console.log(cart);
  //Size variable to set background
  const [sizeBG, setSizeBg] = useState("");
  return (
    <ShopData.Provider
      value={{ data, cartItem, setCartItem, sizeBG, setSizeBg }}
    >
      {children}
    </ShopData.Provider>
  );
};

export default ShopContext;

/* export const shopState = () => {
  return useContext(ShopContext);
};
 */
