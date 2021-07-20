import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import shopApi from "api/shopApi";

import DetailMain from "./DetailMain";
import DetailImg from "./DetailImg";

// material ui core
import { Grid } from "@material-ui/core";

import "./DetailContainer.scss";

function DetailContainer() {
  const { name, id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      const response = await shopApi.getAll(name, { id: id });

      setSelectedProduct(response[0]);
    };

    getProducts();
  }, [name, id]);

  return (
    <section className="detail-container">
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <DetailImg product={selectedProduct} />
        </Grid>
        <Grid item xs={12} md={6}>
          <DetailMain product={selectedProduct} />
        </Grid>
      </Grid>
    </section>
  );
}

export default DetailContainer;
