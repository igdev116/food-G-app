import React, { useContext, useEffect } from "react";

import { AuthContext } from "contexts/AuthProvider";

import DetailContainer from "./components/DetailContainer";
import DetailTab from "./components/DetailTab";
import DetailProducts from "./components/DetailProducts";
import Banner from "components/Banner";

// material ui core
import { Container } from "@material-ui/core";

function Detail() {
  const { setHasHeader } = useContext(AuthContext);

  useEffect(() => {
    setHasHeader(true);
  }, [setHasHeader]);

  return (
    <div className="detail">
      <Banner />
      <Container>
        <DetailContainer />
        <DetailTab />
        <DetailProducts />
      </Container>
    </div>
  );
}

export default Detail;
