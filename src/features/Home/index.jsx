import React from "react";

import Header from "components/Header";
import HomeBanners from "./components/HomeBanners";
import HowItWorks from "./components/HowItWorks";
import HomeIngredients from "./components/HomeIngredients";
import HomeCategory from "./components/HomeCategory";
import HomeDelivery from "./components/HomeDelivery";
import HomeProducts from "./components/HomeProducts";
import HomeAnalysis from "./components/HomeAnalysis";
import HomeReview from "./components/HomeReview";

import auth from "configs/firebase";

function Home() {
  return (
    <>
      <Header />
      <HomeBanners />
      <HowItWorks />
      <HomeIngredients />
      <HomeCategory />
      <HomeDelivery />
      <HomeProducts />
      <HomeAnalysis />
      <HomeReview />
    </>
  );
}

export default Home;
