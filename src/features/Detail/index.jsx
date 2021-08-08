import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { AuthContext } from "contexts/AuthProvider";
import shopApi from "api/shopApi";

// material ui core
import { Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";

import Banner from "components/Banner";
import DetailTab from "./components/DetailTab";
import DetailProducts from "./components/DetailProducts";
import DetailImage from "./components/DetailImage";
import DetailInfo from "./components/DetailInfo";

import "./styles.scss";

function Detail() {
  const { name, id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const { setHasHeader } = useContext(AuthContext);

  useEffect(() => {
    setHasHeader(true);
  }, [setHasHeader]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await shopApi.getAll(name, { id: id });

      setSelectedProduct(response[0]);
    };

    getProducts();
  }, [name, id]);

  return (
    <div className="detail">
      <Banner />
      <Container>
        <section className="detail__container">
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <DetailImage product={selectedProduct} />
            </Grid>
            <Grid item xs={12} md={6}>
              <DetailInfo product={selectedProduct} />
            </Grid>
          </Grid>
        </section>
        <DetailTab />
        <DetailProducts />
      </Container>
    </div>
  );
}

export default Detail;
