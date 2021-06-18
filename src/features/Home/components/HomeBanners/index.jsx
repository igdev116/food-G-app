import React, { useState } from "react";

import HomeBanner from "./HomeBanner";

import "./HomeBanners.scss";

const datas = [
  {
    className: "banner-st",
    title: "Enjoy your meal",
    description: "Good food is wise",
    strong: " medicine",
  },
  {
    className: "banner-nd",
    title: "Happy your special",
    description: "Love at first",
    strong: " bite",
  },
  {
    className: "banner-rd",
    title: "Good food is good mood",
    description: "The belly rules the",
    strong: " mind",
  },
];

function HomeBanners() {
  const [slideNum, setSlideNum] = useState(0);

  const timeWaiter = setTimeout(() => {
    if (slideNum < datas.length - 1) {
      setSlideNum(slideNum + 1);
    } else {
      setSlideNum(0);
    }
  }, 5000);

  const moveDot = (idx) => {
    clearTimeout(timeWaiter);
    console.log(timeWaiter);
    setSlideNum(idx);
  };

  return (
    <div className="banners">
      <div
        className="slides"
        style={{ transform: `translateX(${-100 * slideNum}%)` }}
      >
        {datas.map((data, index) => (
          <HomeBanner key={index} {...data} />
        ))}
      </div>
      <div className="dots">
        {Array(datas.length)
          .fill()
          .map((item, index) => {
            return (
              <span
                onClick={() => moveDot(index)}
                key={index}
                className={slideNum === index ? "dot active" : "dot"}
              ></span>
            );
          })}
      </div>
    </div>
  );
}

export default HomeBanners;
