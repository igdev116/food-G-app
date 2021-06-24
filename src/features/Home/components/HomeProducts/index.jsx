import React from "react";

import HomeProduct from "./HomeProduct";

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
      <div className="pr-yellow-text">Quality Products</div>
      <h2 className="pr-heading-text">
        Burger as expected <strong>dilicious</strong> one
      </h2>
      <Container>
        <div className="home-products__container">
          <Swiper
            loop
            slidesPerView={4}
            spaceBetween={30}
            pagination={{ clickable: true }}
            slidesPerGroup={4}
            speed={2000}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
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
