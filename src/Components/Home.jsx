import React from "react";
import LandingPage from "./LandingPage";
import Popular from "./Popular/Popular";
/* import OfferBanner from "./OfferBanner "; */
import Offer from "./OfferBanner";
import NewCollection from "./NewCollection/NewCollection";
import Exclusive from "./Exclusive";

const Home = () => {
  return (
    <div className=" h-screen">
      <LandingPage />
      <Popular />
      <Offer />
      <NewCollection />
      <Exclusive />
    </div>
  );
};

export default Home;
