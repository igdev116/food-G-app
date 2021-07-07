import React from "react";

import HomeProduct from "./HomeProduct";
import Dialog from "components/Dialog";

// material ui
import { Container } from "@material-ui/core";

// swiper js
import SwiperCore, { Autoplay, Pagination } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/components/pagination/pagination.scss";

import "assets/styles/_typography.scss";
import "./HomeProducts.scss";

// swiper modules
SwiperCore.use([Autoplay, Pagination]);

const data = [
  {
    img: "product-1.png",
    name: "Crazy Burger",
    description: "Buarning do amet contur dicivt suia non nuameius velit",
    price: "20",
  },
  {
    img: "product-2.png",
    name: "Beefcakes Burgers",
    description: "Buarning do amet contur dicivt suia non nuameius velit",
    price: "34",
  },
  {
    img: "product-3.png",
    name: "The Crispy Bun",
    description: "Buarning do amet contur dicivt suia non nuameius velit",
    price: "15",
  },
  {
    img: "product-4.png",
    name: "Bugout Burgers",
    description: "Buarning do amet contur dicivt suia non nuameius velit",
    price: "60",
  },
  {
    img: "product-1.png",
    name: "Crazy Burger",
    description: "Buarning do amet contur dicivt suia non nuameius velit",
    price: "20",
  },
  {
    img: "product-2.png",
    name: "Beefcakes Burgers",
    description: "Buarning do amet contur dicivt suia non nuameius velit",
    price: "34",
  },
  {
    img: "product-3.png",
    name: "The Crispy Bun",
    description: "Buarning do amet contur dicivt suia non nuameius velit",
    price: "15",
  },
  {
    img: "product-4.png",
    name: "Bugout Burgers",
    description: "Buarning do amet contur dicivt suia non nuameius velit",
    price: "60",
  },
];

function HomeProducts() {
  return (
    <section className="home-products">
      <Dialog />
      <Container>
        <div className="pr-yellow-text">Quality Products</div>
        <h2 className="pr-heading-text">
          Burger as expected <strong>dilicious</strong> one
        </h2>
        <div className="home-products__container">
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
            {data.map(({ img, name, description, price }, index) => (
              <SwiperSlide key={index}>
                <HomeProduct
                  img={img}
                  name={name}
                  description={description}
                  price={price}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
}

export default HomeProducts;
