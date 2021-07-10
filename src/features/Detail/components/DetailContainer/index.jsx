import React from "react";

import DetailContent from "./DetailContent";
import DetailImg from "./DetailImg";

// material ui core
import { Grid } from "@material-ui/core";

import "./DetailContainer.scss";

function DetailContainer() {
  return (
    <section className="detail-container">
      <Grid container spacing={6}>
        <Grid item xs={6}>
          <DetailImg />
        </Grid>
        <Grid item xs={6}>
          <DetailContent />
        </Grid>
      </Grid>
    </section>
  );
}

export default DetailContainer;
