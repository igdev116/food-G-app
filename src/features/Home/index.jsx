import React from "react";

import Header from "components/Header";
import HomeBanners from "./components/HomeBanners";
import HowItWorks from "./components/HowItWorks";
import HomeIngredients from "./components/HomeIngredients";
import HomeCategory from "./components/HomeCategory";
import HomeDelivery from "./components/HomeDelivery";
import HomeProducts from "./components/HomeProducts";

import auth from "api/Firebase";

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
    </>
  );
}

export default Home;
