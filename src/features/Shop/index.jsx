import React, { useEffect, useContext } from "react";

import { AuthContext } from "context/AuthProvider";

import ShopBanner from "./components/ShopBanner";
import ShopContainer from "./components/ShopContainer";

// material ui core
import { Container } from "@material-ui/core";

import "./Shop.scss";

function Shop() {
  const { setHasHeader } = useContext(AuthContext);

  useEffect(() => {
    setHasHeader(true);
  }, [setHasHeader]);

  return (
    <>
      <section className="shop">
        <ShopBanner />
        <Container>
          <ShopContainer />
        </Container>
      </section>
    </>
  );
}

export default Shop;
