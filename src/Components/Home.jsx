import React from "react";
import LandingPage from "./LandingPage";
import Popular from "./Popular/Popular";
/* import OfferBanner from "./OfferBanner "; */
import Offer from "./OfferBanner";
import NewCollection from "./NewCollection/NewCollection";
import Exclusive from "./Exclusive";
import Footer from "./Footer";
import Navfooter from "./Navfooter";

const Home = () => {
  return (
    <div className=" h-screen">
      <LandingPage />
      <Popular />

      <Offer />
      <NewCollection />
      <Exclusive />
      <Footer />
      <div className="sticky bottom-0">
        <Navfooter />
      </div>
    </div>
  );
};

export default Home;
