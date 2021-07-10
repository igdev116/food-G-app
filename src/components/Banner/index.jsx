import React from "react";
import { useParams } from "react-router-dom";

// material ui icons
import LinearScaleIcon from "@material-ui/icons/LinearScale";

import "./Banner.scss";

function Banner() {
  const { name } = useParams();
  const paramsName = name.replace("-", " ");

  return (
    <section
      className="banner"
      style={{ backgroundImage: "url(/imgs/Shop/banner.jpg)" }}
    >
      <h2 className="banner__title">{paramsName}</h2>
      <div className="banner__paths">
        <span className="banner__path">Home</span>
        <LinearScaleIcon />
        <span className="banner__path">Shop</span>
        <LinearScaleIcon />
        <span className="banner__path active">{paramsName}</span>
      </div>
    </section>
  );
}

export default Banner;
