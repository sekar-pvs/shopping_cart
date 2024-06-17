import { createContext } from "react";
import all_product from "../Assets/all_product";
import { useState } from "react";

export const ShopData = createContext({});

const ShopContext = ({ children }) => {
  const data = all_product;
  // Add to Cart Variable and imort in ProductDisplay.jsx
  const [cart, setCart] = useState([]);
  return (
    <ShopData.Provider value={{ data, cart, setCart }}>
      {children}
    </ShopData.Provider>
  );
};

export default ShopContext;

/* export const shopState = () => {
  return useContext(ShopContext);
};
 */
