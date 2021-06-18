import React from "react";
import HomeBanner from "./HomeBanner";

import "./HomeBanners.scss";

function HomeBanners() {
  return (
    <div className="home-banners">
      <HomeBanner
        className="banner-st"
        title="Enjoy your meal"
        description="Good food is wise"
        strong=" medicine"
      />
      <HomeBanner
        className="banner-nd"
        title="Happy your special"
        description="Love at first"
        strong=" bite"
      />
      <HomeBanner
        className="banner-rd"
        title="Good food is good mood"
        description="The belly rules the"
        strong=" mind"
      />
    </div>
  );
}

export default HomeBanners;
