import { useEffect, useRef } from "react";

import { homeCategoryData } from "utils/staticData";

// material ui
import { Button, Container } from "@material-ui/core";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";

// gsap
import gsap from "gsap";

// swiper js
import SwiperCore, { Autoplay, Navigation } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";

// swiper scss
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

import BackgroundIcon from "components/BackgroundIcon";
import LoadedImage from "components/LoadedImage";

import {
  BackgroundIconOne,
  BackgroundIconTwo,
  BackgroundIconThree,
} from "utils/backgroundIcons";

import "assets/styles/_typography.scss";
import "./styles.scss";

// swiper modules
SwiperCore.use([Autoplay, Navigation]);

function HomeCategory() {
  let containerRef = useRef(null);
  let captionRef = useRef(null);
  let headingRef = useRef(null);
  let cardsRef = useRef(null);

  // animation
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef,
        start: "20% bottom",
      },
      opacity: 0,
    });

    tl.from(captionRef, {
      x: 20,
      duration: 0.8,
    })
      .from(headingRef, { x: -20, duration: 0.8 }, "-=0.2")
      .from(cardsRef, { y: -20, duration: 0.6 }, "-=0.2");
  }, []);

  return (
    <section className="home-category">
      <BackgroundIcon
        src={BackgroundIconOne}
        width="25"
        top="-60"
        left="-20"
        type="float"
        duration="3"
      />
      <BackgroundIcon
        src={BackgroundIconTwo}
        width="15"
        top="-85"
        right="20"
        type="scale"
        duration="5"
      />
      <BackgroundIcon
        src={BackgroundIconThree}
        width="15"
        top="60"
        right="60"
        type="float"
        duration="2.5"
        delay="1"
      />

      <Container>
        <div
          ref={(el) => (containerRef = el)}
          className="home-category__container"
        >
          <div ref={(el) => (captionRef = el)} className="primary-yellow-text">
            What we have?
          </div>
          <h2 ref={(el) => (headingRef = el)} className="primary-heading-text">
            Browse food category
          </h2>
          <div ref={(el) => (cardsRef = el)} className="home-category__cards">
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
              {homeCategoryData.map(({ img, name }, index) => (
                <SwiperSlide key={index}>
                  <div className="home-category__card">
                    <div className="home-category__card-img-wrapper">
                      <img
                        className="home-category__card-img"
                        src={LoadedImage(img)}
                        alt="Category card"
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
