import React from "react";

import "./HowItWorks.scss";

// material ui
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

import "assets/styles/_typography.scss";

const data = [
  {
    img: "step-1.jpg",
    step: "1",
    content: "Choose Your Favorite",
    arrow: "arrow-1.png",
  },
  {
    img: "step-2.jpg",
    step: "2",
    content: "We Deliver Your Meals",
    arrow: "arrow-2.png",
  },
  {
    img: "step-3.jpg",
    step: "3",
    content: "Cash on Delivery",
    arrow: "arrow-3.png",
  },
  {
    img: "step-4.jpg",
    step: "4",
    content: "Eat And Enjoy",
  },
];

function HowItWorks() {
  return (
    <section className="how-work">
      <Container>
        <div className="pr-yellow-text">Order now!</div>
        <h2 className="pr-heading-text">How it works</h2>

        <div className="how-work__steps">
          <Grid container spacing={3}>
            {data.map(({ img, step, content, arrow }, index) => (
              <Grid key={index} item xs={12} sm={6} lg={3}>
                <div className="how-work__step">
                  <div className="how-work__thumb">
                    <div className="how-work__thumb-wrapper">
                      <img
                        className="how-work__img"
                        src={`/imgs/home/${img}`}
                        alt="steps"
                      ></img>
                      <span>0{step} Step</span>
                    </div>
                    <div
                      style={{ backgroundImage: `url(/imgs/Home/${arrow})` }}
                      className="how-work__thumb-arrow"
                    ></div>
                  </div>
                  <div className="how-work__content">{content}</div>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </section>
  );
}

export default HowItWorks;
