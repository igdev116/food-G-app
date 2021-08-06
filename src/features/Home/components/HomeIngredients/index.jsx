import { useState } from "react";

import { MOBILE_BREAKPOINT } from "constants/breakpoints";
import { homeIngredientsData } from "utils/staticData";

import PrimaryButton from "components/PrimaryButton";

import { IngredientsThumb } from "utils/homeImages";

import "assets/styles/_typography.scss";
import "./styles.scss";

function HomeIngredients() {
  const [hasBackground, setHasBackground] = useState(true);

  window.addEventListener("resize", () => {
    if (window.innerWidth < MOBILE_BREAKPOINT) {
      setHasBackground(false);
    } else {
      setHasBackground(true);
    }
  });

  return (
    <section className="home-ingredients">
      <div
        className="home-ingredients__thumb"
        style={{
          backgroundImage: `${
            hasBackground ? `url(${IngredientsThumb})` : "none"
          }`,
        }}
      >
        <div className="home-ingredients__cards-left">
          {homeIngredientsData.leftData.map(
            ({ title, content, order }, index) => (
              <div key={index} className="home-ingredients__card">
                <h3 className="home-ingredients__card-title">{title}</h3>
                <p className="home-ingredients__card-content">{content}</p>
                <span>{order}</span>
              </div>
            )
          )}
        </div>
        <div className="home-ingredients__cards-right">
          {homeIngredientsData.rightData.map(
            ({ title, content, order }, index) => (
              <div key={index} className="home-ingredients__card">
                <h3 className="home-ingredients__card-title">{title}</h3>
                <p className="home-ingredients__card-content">{content}</p>
                <span>{order}</span>
              </div>
            )
          )}
        </div>
        <span
          className="home-ingredients__shape-st"
          style={{ backgroundImage: "url(/imgs/Home/shape-1.png)" }}
        ></span>
        <span
          className="home-ingredients__shape-nd"
          style={{ backgroundImage: "url(/imgs/Home/shape-2.png)" }}
        ></span>
      </div>

      <div className="home-ingredients__content">
        <div className="primary-yellow-text">Best food</div>

        <h2 className="primary-heading-text">
          Super delicious Steak <strong>Hamburger</strong>
        </h2>

        <h2 className="home-ingredients__price">
          <strong>$25.00</strong>
        </h2>

        <PrimaryButton subClass="red" page="shop">
          Order Now
        </PrimaryButton>
      </div>
    </section>
  );
}

export default HomeIngredients;
