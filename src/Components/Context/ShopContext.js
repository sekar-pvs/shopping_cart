import { createContext } from "react";
import all_product from "../Assets/all_product";

export const ShopData = createContext({});

const ShopContext = ({ children }) => {
  const data = all_product;
  return <ShopData.Provider value={{ data }}>{children}</ShopData.Provider>;
};

export default ShopContext;

/* export const shopState = () => {
  return useContext(ShopContext);
};
 */
