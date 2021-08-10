import { useEffect, useRef } from "react";

import { homeIngredientsData } from "utils/staticData";

// gsap
import gsap from "gsap";

import PrimaryButton from "components/PrimaryButton";
import LoadedImage from "components/LoadedImage";

import { IngredientsThumb, ShapeOne, ShapeTwo } from "utils/homeImages";

import "assets/styles/_typography.scss";
import "./styles.scss";

function HomeIngredients() {
  let cardsContainerRef = useRef(null);
  let cardOneRef = useRef(null);
  let cardTwoRef = useRef(null);
  let cardThreeRef = useRef(null);
  let cardFourRef = useRef(null);
  let cardFiveRef = useRef(null);
  let cardSixRef = useRef(null);

  let contentContainerRef = useRef(null);
  let captionRef = useRef(null);
  let headingRef = useRef(null);
  let priceRef = useRef(null);
  let btnRef = useRef(null);

  const leftCardRefs = [cardOneRef, cardTwoRef, cardThreeRef];
  const rightCardRefs = [cardFourRef, cardFiveRef, cardSixRef];

  // animation
  useEffect(() => {
    const cardsTl = gsap.timeline({
      scrollTrigger: {
        trigger: cardsContainerRef,
        start: "40% bottom",
      },
    });

    const contentTl = gsap.timeline({
      scrollTrigger: {
        trigger: contentContainerRef,
        start: "10% bottom",
      },
    });

    cardsTl
      .from(leftCardRefs[0], { y: 20, duration: 0.6 }, 0.2)
      .from(leftCardRefs[1], { y: 40, duration: 0.6 }, 0.6)
      .from(leftCardRefs[2], { y: 20, duration: 0.6 }, 1)
      .from(rightCardRefs[0], { y: 20, duration: 0.6 }, 1.4)
      .from(rightCardRefs[1], { y: 40, duration: 0.6 }, 1.8)
      .from(rightCardRefs[2], { y: 20, duration: 0.6 }, 2.2);

    contentTl
      .from(captionRef, { x: -20, duration: 0.6 })
      .from(headingRef, { x: 20, duration: 0.6 })
      .from(priceRef, { y: 20, duration: 0.6 })
      .from(btnRef, { y: 20, duration: 0.6 });
  }, []);

  return (
    <section
      ref={(el) => (cardsContainerRef = el)}
      className="home-ingredients"
    >
      <div
        className="home-ingredients__thumb"
        style={{ backgroundImage: `url(${LoadedImage(IngredientsThumb)})` }}
      >
        <div className="home-ingredients__cards-left">
          {homeIngredientsData.leftData.map(
            ({ title, content, order }, index) => (
              <div
                ref={(el) => (leftCardRefs[index] = el)}
                className="home-ingredients__card-wrapper"
                key={`${title}-${index}`}
              >
                <div className="home-ingredients__card">
                  <h3 className="home-ingredients__card-title">{title}</h3>
                  <p className="home-ingredients__card-content">{content}</p>
                  <span>{order}</span>
                </div>
              </div>
            )
          )}
        </div>
        <div className="home-ingredients__cards-right">
          {homeIngredientsData.rightData.map(
            ({ title, content, order }, index) => (
              <div
                ref={(el) => (rightCardRefs[index] = el)}
                className="home-ingredients__card-wrapper"
                key={`${title}-${index}`}
              >
                <div key={index} className="home-ingredients__card">
                  <h3 className="home-ingredients__card-title">{title}</h3>
                  <p className="home-ingredients__card-content">{content}</p>
                  <span>{order}</span>
                </div>
              </div>
            )
          )}
        </div>
        <span
          className="home-ingredients__shape-st"
          style={{ backgroundImage: `url(${LoadedImage(ShapeOne)})` }}
        ></span>
        <span
          className="home-ingredients__shape-nd"
          style={{ backgroundImage: `url(${LoadedImage(ShapeTwo)})` }}
        ></span>
      </div>

      <div
        ref={(el) => (contentContainerRef = el)}
        className="home-ingredients__content"
      >
        <div ref={(el) => (captionRef = el)} className="primary-yellow-text">
          Best food
        </div>

        <h2 ref={(el) => (headingRef = el)} className="primary-heading-text">
          Super delicious Steak <strong>Hamburger</strong>
        </h2>

        <h2 ref={(el) => (priceRef = el)} className="home-ingredients__price">
          <strong>$25.00</strong>
        </h2>

        <div ref={(el) => (btnRef = el)}>
          <PrimaryButton subClass="red" page="shop">
            Order Now
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}

export default HomeIngredients;
