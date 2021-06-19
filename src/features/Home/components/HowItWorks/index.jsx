import React from "react";
import "./HowItWorks.scss";

import StepOne from "../../imgs/step-1.jpg";
import StepTwo from "../../imgs/step-2.jpg";
import StepThree from "../../imgs/step-3.jpg";
import StepFour from "../../imgs/step-4.jpg";

import { Container } from "@material-ui/core";

import "assets/styles/_typography.scss";

function HowItWorks() {
  return (
    <section className="how-work">
      <Container>
        <div className="pr-yellow-text">Order now!</div>
        <h2 className="pr-heading-text">How it works</h2>

        <div className="how-work__steps">
          <div className="how-work__step">
            <div className="how-work__thumb">
              <img className="how-work__img" src={StepOne} alt="steps" />
              <span>01 Step</span>
            </div>
            <div className="how-work__content">Choose Your Favorite</div>
          </div>
          <div className="how-work__step">
            <div className="how-work__thumb">
              <img className="how-work__img" src={StepTwo} alt="steps" />
              <span>02 Step</span>
            </div>
            <div className="how-work__content">We Deliver Your Meals</div>
          </div>
          <div className="how-work__step">
            <div className="how-work__thumb">
              <img className="how-work__img" src={StepThree} alt="steps" />
              <span>03 Step</span>
            </div>
            <div className="how-work__content">Cash on Delivery</div>
          </div>
          <div className="how-work__step">
            <div className="how-work__thumb">
              <img className="how-work__img" src={StepFour} alt="steps" />
              <span>04 Step</span>
            </div>
            <div className="how-work__content">Eat And Enjoy</div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HowItWorks;
