import React from "react";

import PrRedBtn from "components/CusButtons";

import { Container } from "@material-ui/core";

import "assets/styles/_typography.scss";
import "./HomeDelivery.scss";

function HomeDelivery() {
  return (
    <section className="home-delivery">
      <Container>
        <div className="home-delivery__container">
          <div className="home-delivery__col">
            <div className="pr-yellow-text">Delivery</div>
            <h2 className="pr-heading-text">
              A Moments Of Delivered <strong>On Right Time & Place</strong>
            </h2>

            <p className="home-delivery__description">
              Food G is a restaurant, bar and coffee roastery located on a busy
              corner site in Farringdon's Exmouth Market. With glazed frontage
              on two sides of the building, overlooking the market and a
              bustling London inteon.
            </p>

            <div className="home-delivery__contact">
              <img
                src="/svgs/Home/small-delivery.svg"
                className="home-delivery__contact-img"
                alt="Delivery"
              ></img>
              <div className="home-delivery__contact-col">
                <div className="home-delivery__contact-title">
                  Delivery Order Num
                </div>
                <div className="home-delivery__contact-phone">
                  <strong>123-59794069</strong>
                </div>
              </div>
              <PrRedBtn type="shop">Order Now</PrRedBtn>
            </div>
          </div>
          <img
            src="/svgs/Home/big-delivery.svg"
            className="home-delivery__img"
            alt="Delivery"
          />
        </div>
      </Container>
    </section>
  );
}

export default HomeDelivery;
