import React, { useEffect, useState } from "react";

import { homeBannersData } from "utils/staticData";

import HomeBanner from "./HomeBanner";

import "./styles.scss";

function HomeBanners() {
  const [slideNum, setSlideNum] = useState(0);

  // handle auto slide
  useEffect(() => {
    const timeWaiter = setTimeout(() => {
      if (slideNum < homeBannersData.length - 1) {
        setSlideNum(slideNum + 1);
      } else {
        setSlideNum(0);
      }
    }, 6000);

    return clearTimeout(timeWaiter);
  });

  const moveDot = (idx) => {
    setSlideNum(idx);
  };

  return (
    <section className="home-banners">
      <div
        className="slides"
        style={{ transform: `translateX(${-100 * slideNum}%)` }}
      >
        {homeBannersData.map((data, index) => (
          <HomeBanner key={index} {...data} />
        ))}
      </div>
      <div className="dots">
        {Array(homeBannersData.length)
          .fill()
          .map((_, index) => {
            return (
              <span
                onClick={() => moveDot(index)}
                key={index}
                className={slideNum === index ? "dot active" : "dot"}
              ></span>
            );
          })}
      </div>
    </section>
  );
}

export default HomeBanners;
