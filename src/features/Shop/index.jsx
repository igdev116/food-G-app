import React from "react";

import ShopBanner from "./components/ShopBanner";
import ShopContainer from "./components/ShopContainer";

import { Container } from "@material-ui/core";

import "./Shop.scss";

function Shop() {
  return (
    <section className="shop">
      <ShopBanner />
      <Container>
        <ShopContainer />
      </Container>
    </section>
  );
}

export default Shop;
