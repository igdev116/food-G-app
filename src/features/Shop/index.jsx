import React from "react";

import ShopBanner from "./components/ShopBanner";
import ShopFilters from "./components/ShopContainer/ShopFilters";
import ShopContent from "./components/ShopContainer/ShopContent";
import { Container } from "@material-ui/core";

import "./Shop.scss";

function Shop() {
  return (
    <section className="shop">
      <ShopBanner />
      <Container>
        <div className="shop__container">
          <ShopFilters />
          <ShopContent />
        </div>
      </Container>
    </section>
  );
}

export default Shop;
