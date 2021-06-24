import React from "react";

import BackgroundIcon from "components/BackgroundIcon";

import { Container } from "@material-ui/core";

// swiper
import SwiperCore, { Autoplay, Pagination } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";

import "./HomeReview.scss";

// swiper modules
SwiperCore.use([Autoplay, Pagination]);

const data = [
  {
    img: "user-review-1.jpg",
    name: "mark zuckerberg",
    role: "Co-founding Facebook, Inc",
    comment:
      "I chose food G because of their value And incredible superior customer Service they really awesome Food with quality service Ha of their value And incredible sup with quality",
  },
  {
    img: "user-review-2.jpg",
    name: "Rose",
    role: "Main vocalist of Backpink group",
    comment:
      "Had dinner with girl friends. Menu is perfect, something for everyone. Service was awesome and Jason was very accommodating. Will be back definitely!",
  },
  {
    img: "user-review-3.jpg",
    name: "Tim Cook",
    role: "CEO of Apple",
    comment:
      "I had lunch with some of my colleagues at Echo on Day 1. I had the wedge salad - it was delicious. On Night 2, I enjoyed a drink at the bar. I had a Margarita. The service was excellent",
  },
];

function HomeReview() {
  return (
    <section className="home-review">
      <BackgroundIcon
        index="3"
        width="15"
        top="-10"
        left="0"
        type="float"
        duration="4"
      />
      <BackgroundIcon
        index="4"
        width="15"
        top="20"
        right="10"
        type="scale"
        duration="10"
        delay="1"
      />
      <BackgroundIcon
        index="5"
        width="12"
        top="40"
        right="550"
        type="float"
        duration="4"
        delay="2"
      />
      <BackgroundIcon
        index="6"
        width="12"
        bottom="20"
        left="250"
        type="scale"
        duration="10"
        delay="3"
      />
      <BackgroundIcon
        index="7"
        width="13"
        top="-25"
        right="450"
        type="scale"
        duration="10"
        delay="3"
      />
      <Container>
        <Swiper
          speed={500}
          loop
          grabCursor={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
        >
          {data.map(({ img, name, role, comment }, index) => (
            <SwiperSlide key={index}>
              <div className="home-review__content">
                <div className="home-review__img-wrapper">
                  <img
                    src={`/imgs/Home/${img}`}
                    alt="user-review"
                    className="home-review__img"
                  ></img>
                </div>
                <div className="home-review__name">{name}</div>
                <div className="home-review__role">{role}</div>
                <p className="home-review__comment">{comment}</p>
              </div>
              ;
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
}

export default HomeReview;
