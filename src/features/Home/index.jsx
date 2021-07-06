import React, { useEffect, useContext } from "react";

import { AuthContext } from "context/AuthProvider";

import HomeBanners from "./components/HomeBanners";
import HowItWorks from "./components/HowItWorks";
import HomeIngredients from "./components/HomeIngredients";
import HomeCategory from "./components/HomeCategory";
import HomeDelivery from "./components/HomeDelivery";
import HomeProducts from "./components/HomeProducts";
import HomeAnalysis from "./components/HomeAnalysis";
import HomeReview from "./components/HomeReview";

function Home() {
  const { setHasHeader } = useContext(AuthContext);

  useEffect(() => {
    setHasHeader(true);
  }, [setHasHeader]);

  return (
    <>
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
