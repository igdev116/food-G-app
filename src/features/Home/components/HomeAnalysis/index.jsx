import React from "react";

// material ui
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

import "./HomeAnalysis.scss";

function HomeAnalysis() {
  return (
    <section
      className="home-analysis"
      style={{ backgroundImage: "url(/imgs/Home/analysis-thumb.jpg)" }}
    >
      <div className="home-analysis__video">
        <div className="home-analysis__video-content">
          <div className="home-analysis__video-content-text">
            <span className="home-analysis__video-content-name">Sandwich</span>
            <span className="home-analysis__video-content-price">$45</span>
          </div>
          <div className="home-analysis__video-btn">
            <div className="triangle"></div>
          </div>
          <span className="gooey"></span>
          <span className="gooey"></span>
          <span className="gooey"></span>
        </div>
      </div>

      <div className="home-analysis__container">
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <div className="home-analysis__qnt">340+</div>
              <div className="home-analysis__description">Cups of Coffee</div>
            </Grid>
            <Grid item xs={3}>
              <div className="home-analysis__qnt">2,678+</div>
              <div className="home-analysis__description">Orders Everyday</div>
            </Grid>
            <Grid item xs={3}>
              <div className="home-analysis__qnt">60</div>
              <div className="home-analysis__description">
                Skilled Professionals
              </div>
            </Grid>
            <Grid item xs={3}>
              <div className="home-analysis__qnt">130</div>
              <div className="home-analysis__description">
                Sandwichs at Hour
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </section>
  );
}

export default HomeAnalysis;
