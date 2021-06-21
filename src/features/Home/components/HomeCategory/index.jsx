import React, { useEffect, useRef, useState } from "react";

import HomeCategoryDatas from "./HomeCategoryDatas";

import { Container } from "@material-ui/core";

import "assets/styles/_typography.scss";
import "./HomeCategory.scss";

let cardWidth; // get width of card
// let datas = HomeCategoryDatas;

function HomeCategory() {
  const datas =
    HomeCategoryDatas.concat(HomeCategoryDatas).concat(HomeCategoryDatas);
  const slidesLen = datas.length;
  const middleSlide = slidesLen / 3;

  const ref = useRef();
  const slider = useRef();
  const [cardWidth, setCardWidth] = useState(0);
  const [movedSlide, setMovedSlide] = useState(middleSlide);
  const [isBack, setIsBack] = useState(false);
  const [index, setIndex] = useState(middleSlide);

  const handlePrevSlider = () => {
    setIndex((index - 1 + slidesLen) % slidesLen);
    setMovedSlide(movedSlide - 1);

    if (isBack) {
      setIsBack(false);
    }
  };

  const handleNextSlider = () => {
    setIndex((index + 1 + slidesLen) % slidesLen);
    setMovedSlide(movedSlide + 1);
    console.log({ index });

    if (isBack) {
      setIsBack(false);
    }
  };

  useEffect(() => {
    setCardWidth(ref.current.getBoundingClientRect().width);
  });

  const timeWaiter = setTimeout(() => {
    if (movedSlide === (slidesLen / 3) * 2 || movedSlide === 0) {
      setIndex(middleSlide);
      setMovedSlide(middleSlide);
      setIsBack(true);
      console.log("if:", index);
    } else {
      setIndex((index + 1 + slidesLen) % slidesLen);
      setMovedSlide(movedSlide + 1);
      setIsBack(false);
      console.log("else:", index);
    }
  }, 1000);

  const handleTransition = () => {
    // handle slide back or next
    if (movedSlide === (slidesLen / 3) * 2 || movedSlide === 0) {
      setIndex(middleSlide);
      setMovedSlide(middleSlide);
      setIsBack(true);
    }
  };

  return (
    <section className="home-category">
      <Container>
        <div className="pr-yellow-text">What we have?</div>
        <h2 className="pr-heading-text">Browse food category</h2>

        <div className="home-category__cards-wrapper">
          <div
            // onTransitionEnd={handleTransition}
            ref={slider}
            className="home-category__cards"
            style={{
              transform: `translateX(${
                isBack ? -middleSlide * cardWidth : -index * cardWidth
              }px)`,
              transition: `${isBack ? "none" : "transform 0.15s"}`,
            }}
          >
            {datas.map(({ svg, name }, index) => (
              <div ref={ref} key={index} className="home-category__card">
                <div className="home-category__card-img-wrapper">
                  <img className="home-category__card-img" src={svg}></img>
                </div>
                <div className="home-category__card-description">{name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* <button onClick={handlePrevSlider}>Prev</button> */}
        {/* <button onClick={handleNextSlider}>Next</button> */}
      </Container>
    </section>
  );
}

export default HomeCategory;
