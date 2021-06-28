import React from "react";

import LinearScaleIcon from "@material-ui/icons/LinearScale";

import "./ShopBanner.scss";

function ShopBanner() {
  
  return (
    <section
      className="shop-banner"
      style={{ backgroundImage: "url(/imgs/Shop/banner.jpg)" }}
    >
      <h2 className="shop-banner__title">Chicken</h2>
      <div className="shop-banner__paths">
        <span className="shop-banner__path">Home</span>
        <LinearScaleIcon />
        <span className="shop-banner__path">Products</span>
        <LinearScaleIcon />
        <span className="shop-banner__path active">Chicken</span>
      </div>
    </section>
  );
}

export default ShopBanner;
