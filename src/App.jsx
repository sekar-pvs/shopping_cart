import React from "react";
//import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Navfooter from "./Components/Navfooter";
import { Route, Routes } from "react-router-dom";
import Cart from "./Components/Cart";
import Login from "./Components/Login";
import Home from "./Components/Home";
import ShopCategori from "./Components/ShopCategori";
import menBanner from "./Components/Assets/banner_mens.png";
import womenBanner from "./Components/Assets/banner_women.png";
import kidBanner from "./Components/Assets/banner_kids.png";
import Product from "./Components/Product";
import Signup from "./Components/Signup";
import Order from "./Components/Order";

const App = () => {
  return (
    <div className="h-screen  ">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/men"
          element={<ShopCategori category="men" banner={menBanner} />}
        />
        <Route
          path="/women"
          element={<ShopCategori category="women" banner={womenBanner} />}
        />
        <Route
          path="/kid"
          element={<ShopCategori category="kid" banner={kidBanner} />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="/order" element={<Order />} />
      </Routes>

      <Navfooter />
    </div>
  );
};
export default App;
