import { useEffect, useRef } from "react";

import { homeProductsData } from "utils/staticData";

// gsap
import gsap from "gsap";

// material ui
import { Container } from "@material-ui/core";

// swiper js
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper/core";

// swiper scss
import "swiper/components/pagination/pagination.scss";

import HomeProduct from "./HomeProduct";
import Dialog from "components/Dialog";

import "assets/styles/_typography.scss";
import "./styles.scss";

// swiper modules
SwiperCore.use([Autoplay, Pagination]);

function HomeProducts() {
  let containerRef = useRef(null);
  let captionRef = useRef(null);
  let headingRef = useRef(null);
  let cardsRef = useRef(null);

  // animation
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef,
        start: "60% bottom",
      },
    });

    tl.from(captionRef, { x: 20, opacity: 0, duration: 0.8 }, "-=0.2")
      .from(headingRef, { x: -20, opacity: 0, duration: 0.8 }, "-=0.2")
      .from(cardsRef, { y: 20, opacity: 0, duration: 0.8 }, "-=0.2");
  }, []);

  return (
    <section ref={(el) => (containerRef = el)} className="home-products">
      <Dialog />
      <Container>
        <div ref={(el) => (captionRef = el)} className="primary-yellow-text">
          Quality Products
        </div>
        <h2 ref={(el) => (headingRef = el)} className="primary-heading-text">
          Burger as expected <strong>dilicious</strong> one
        </h2>
        <div ref={(el) => (cardsRef = el)} className="home-products__container">
          <Swiper
            loop
            speed={800}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                pagination: false,
              },
              // >= tablet
              600: {
                slidesPerView: 3,
                spaceBetween: 20,
                pagination: false,
              },
              // >= desktop
              960: {
                slidesPerView: 4,
                spaceBetween: 30,
                slidesPerGroup: 4,
                speed: 1500,
              },
            }}
          >
            {homeProductsData.map(
              ({ img, name, description, price }, index) => (
                <SwiperSlide key={index}>
                  <HomeProduct
                    img={img}
                    name={name}
                    description={description}
                    price={price}
                  />
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>
      </Container>
    </section>
  );
}

export default HomeProducts;
