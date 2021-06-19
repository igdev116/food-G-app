import React from "react";
import Header from "components/Header";
import HomeBanners from "./components/HomeBanners";

import auth from "api/Firebase";

function Home() {
  return (
    <>
      <Header />
      <HomeBanners />
    </>
  );
}

export default Home;
