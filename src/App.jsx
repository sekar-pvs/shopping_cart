import React from "react";
import { faker } from "@faker-js/faker";
//import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Navfooter from "./Components/Navfooter";
import { Route, Routes } from "react-router-dom";
import MensComp from "./Components/MensComp";
import WomensComp from "./Components/WomensComp";
import KidsComp from "./Components/KidsComp";
import Cart from "./Components/Cart";
import Login from "./Components/Login";
import Home from "./Components/Home";

const App = () => {
  faker.seed(5);
  const arr = [...Array(5)].map(() => ({
    f: faker.person.firstName(),
    music: faker.music.songName(),
    image: faker.image.url(),
  }));
  console.log(arr);
  /*  let arr = faker.person.firstName();
  console.log(arr); */
  return (
    <div className="h-screen  ">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mens" element={<MensComp />} />
        <Route path="/womens" element={<WomensComp />} />
        <Route path="/kids" element={<KidsComp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Navfooter />
    </div>
  );
};
export default App;
