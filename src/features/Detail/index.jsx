import React from "react";

import DetailContainer from "./components/DetailContainer";
import DetailTab from "./components/DetailTab";
import DetailProducts from "./components/DetailProducts";

// material ui core
import { Container } from "@material-ui/core";

function Detail() {
  return (
    <div className="detail">
      <Container>
        <DetailContainer />
        <DetailTab />
        <DetailProducts />
      </Container>
    </div>
  );
}

export default Detail;
