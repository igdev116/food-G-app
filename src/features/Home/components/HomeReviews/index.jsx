import { useEffect, useRef } from "react";

import { homeReviewsData } from "utils/staticData";

// gsap
import gsap from "gsap";

// material ui core
import { Container } from "@material-ui/core";

// swiper js
import SwiperCore, { Autoplay, Pagination } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";

// swiper scss
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";

import BackgroundIcon from "components/BackgroundIcon";
import LoadedImage from "components/LoadedImage";

import {
  BackgroundIconFour,
  BackgroundIconFive,
  BackgroundIconSix,
  BackgroundIconSeven,
  BackgroundIconEight,
} from "utils/backgroundIcons";

import "./styles.scss";

// swiper modules
SwiperCore.use([Autoplay, Pagination]);

function HomeReviews() {
  let containerRef = useRef(null);

  // animation
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef,
        start: "center bottom",
      },
    });

    tl.from(containerRef, { y: -20, duration: 0.8 });
  }, []);

  return (
    <section className="home-reviews">
      <Container ref={(el) => (containerRef = el)}>
        <Swiper
          speed={500}
          spaceBetween={20}
          loop
          grabCursor={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
        >
          {homeReviewsData.map(({ img, name, role, comment }, index) => (
            <SwiperSlide key={index}>
              <div className="home-reviews__content">
                <div className="home-reviews__img-wrapper">
                  <img
                    src={LoadedImage(img)}
                    alt="user-review"
                    className="home-reviews__img"
                  ></img>
                </div>
                <div className="home-reviews__name">{name}</div>
                <div className="home-reviews__role">{role}</div>
                <p className="home-reviews__comment">{comment}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>

      <BackgroundIcon
        src={BackgroundIconFour}
        width="14"
        top="-10"
        left="0"
        type="float"
        duration="4"
      />
      <BackgroundIcon
        src={BackgroundIconFive}
        width="15"
        top="20"
        right="10"
        type="scale"
        duration="10"
        delay="1"
      />
      <BackgroundIcon
        src={BackgroundIconSix}
        width="12"
        top="40"
        right="550"
        type="float"
        duration="4"
        delay="2"
      />
      <BackgroundIcon
        src={BackgroundIconSeven}
        width="12"
        bottom="20"
        left="250"
        type="scale"
        duration="10"
        delay="3"
      />
      <BackgroundIcon
        src={BackgroundIconEight}
        width="13"
        top="-25"
        right="450"
        type="scale"
        duration="10"
        delay="3"
      />
    </section>
  );
}

export default HomeReviews;
