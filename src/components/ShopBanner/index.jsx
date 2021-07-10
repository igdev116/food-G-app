import React from "react";
import { useParams } from "react-router-dom";

// material ui icons
import LinearScaleIcon from "@material-ui/icons/LinearScale";

import "./ShopBanner.scss";

function ShopBanner() {
  const { name } = useParams();
  const paramsName = name.replace("-", " ");

  return (
    <section
      className="shop-banner"
      style={{ backgroundImage: "url(/imgs/Shop/banner.jpg)" }}
    >
      <h2 className="shop-banner__title">{paramsName}</h2>
      <div className="shop-banner__paths">
        <span className="shop-banner__path">Home</span>
        <LinearScaleIcon />
        <span className="shop-banner__path">Shop</span>
        <LinearScaleIcon />
        <span className="shop-banner__path active">{paramsName}</span>
      </div>
    </section>
  );
}

export default ShopBanner;
