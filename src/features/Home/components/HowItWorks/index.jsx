import React from "react";
import "./HowItWorks.scss";

import { Container } from "@material-ui/core";

import "assets/styles/_typography.scss";

const data = [
  {
    img: "step-1.jpg",
    step: "1",
    content: "Choose Your Favorite",
  },
  {
    img: "step-2.jpg",
    step: "2",
    content: "We Deliver Your Meals",
  },
  {
    img: "step-3.jpg",
    step: "3",
    content: "Cash on Delivery",
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
          {data.map(({ img, step, content }, index) => (
            <div key={index} className="how-work__step">
              <div className="how-work__thumb">
                <img
                  className="how-work__img"
                  src={`/imgs/home/${img}`}
                  alt="steps"
                />
                <span>0{step} Step</span>
              </div>
              <div className="how-work__content">{content}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default HowItWorks;
