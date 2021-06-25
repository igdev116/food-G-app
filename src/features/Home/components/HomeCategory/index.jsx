import React from "react";

import BackgroundIcon from "components/BackgroundIcon";

// material ui
import { Button, Container } from "@material-ui/core";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";

// swiper js
import SwiperCore, { Autoplay, Navigation } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

import "assets/styles/_typography.scss";
import "./HomeCategory.scss";

// swiper modules
SwiperCore.use([Autoplay, Navigation]);

const data = [
  {
    img: "hamburger",
    name: "breakfast",
  },
  {
    img: "coffee",
    name: "coffee",
  },
  {
    img: "pork",
    name: "pork ham",
  },
  {
    img: "dinner",
    name: "dinner",
  },
  {
    img: "tea",
    name: "tea",
  },
  {
    img: "lunch",
    name: "lunch",
  },
  {
    img: "juice",
    name: "juice",
  },
  {
    img: "chicken",
    name: "grilled chicken",
  },
  {
    img: "beef",
    name: "roast beef",
  },
];

function HomeCategory() {
  return (
    <section className="home-category">
      <BackgroundIcon
        index="0"
        width="25"
        top="-60"
        left="-20"
        type="float"
        duration="3"
      />
      <BackgroundIcon
        index="1"
        width="15"
        top="-85"
        right="20"
        type="scale"
        duration="5"
      />
      <BackgroundIcon
        index="2"
        width="15"
        top="60"
        right="60"
        type="float"
        duration="2.5"
        delay="1"
      />

      <Container>
        <div className="home-category__container">
          <div className="pr-yellow-text">What we have?</div>
          <h2 className="pr-heading-text">Browse food category</h2>
          <div className="home-category__cards">
            <Swiper
              slidesPerView={2}
              loop
              loopFillGroupWithBlank={true}
              autoplay={{
                delay: 1800,
                disableOnInteraction: false,
              }}
              navigation={{
                prevEl: ".prev-btn",
                nextEl: ".next-btn",
              }}
              breakpoints={{
                600: {
                  slidesPerView: 4,
                },
                960: {
                  slidesPerView: 7,
                },
              }}
            >
              {data.map(({ img, name }, index) => (
                <SwiperSlide key={index}>
                  <div className="home-category__card">
                    <div className="home-category__card-img-wrapper">
                      <img
                        className="home-category__card-img"
                        src={`/svgs/home/${img}.svg`}
                      />
                    </div>
                    <div className="home-category__card-description">
                      {name}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <Button className="prev-btn">
              <DoubleArrowIcon style={{ transform: "rotate(180deg)" }} />
            </Button>
            <Button className="next-btn">
              <DoubleArrowIcon />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HomeCategory;
