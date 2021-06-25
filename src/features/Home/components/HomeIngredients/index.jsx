import React, { useState } from "react";

import PrRedBtn from "components/CusButtons";
import { MOBILE_BREAKPOINT } from "constants/breakpoints";

import "assets/styles/_typography.scss";
import "./HomeIngredients.scss";

const leftCardDatas = [
  {
    title: "Mild Butter",
    content:
      "Patak's Butter Chicken Mild is a creamy tomato and butter flavour curry sauce",
    order: "01",
  },
  {
    title: "Slices Beef",
    content: "Get quality Beef Slices at Tesco. Shop in store or online",
    order: "02",
  },
  {
    title: "Sleek Onion",
    content:
      "Green onions have a sleek linear shape with white or pale-green bulbs and long green tops",
    order: "03",
  },
];

const rightCardDatas = [
  {
    title: "Fresh Bread",
    content: "Homemade bread is more nutritious than your store-bought variety",
    order: "04",
  },
  {
    title: "Lettuce Leaf",
    content:
      "It is most often grown as a leaf vegetable, but sometimes for its stem and seeds",
    order: "05",
  },
  {
    title: "Glow Cheese",
    content: "Glowfood. Cheese. Is. Unreal! As a cheese fanatic",
    order: "06",
  },
];

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
    <section className="ingredients">
      <div
        className="ingredients__thumb"
        style={{
          backgroundImage: `${
            hasBackground ? "url(/imgs/home/ingredients.jpg)" : "none"
          }`,
        }}
      >
        <div className="ingredients__cards-left">
          {leftCardDatas.map(({ title, content, order }, index) => (
            <div key={index} className="ingredients__card">
              <h3 className="ingredients__card-title">{title}</h3>
              <p className="ingredients__card-content">{content}</p>
              <span>{order}</span>
            </div>
          ))}
        </div>
        <div className="ingredients__cards-right">
          {rightCardDatas.map(({ title, content, order }, index) => (
            <div key={index} className="ingredients__card">
              <h3 className="ingredients__card-title">{title}</h3>
              <p className="ingredients__card-content">{content}</p>
              <span>{order}</span>
            </div>
          ))}
        </div>
        <span
          className="ingredients__shape-st"
          style={{ backgroundImage: "url(/imgs/home/shape-1.png)" }}
        ></span>
        <span
          className="ingredients__shape-nd"
          style={{ backgroundImage: "url(/imgs/home/shape-2.png)" }}
        ></span>
      </div>

      <div className="ingredients__content">
        <div className="pr-yellow-text">Best food</div>

        <h2 className="pr-heading-text">
          Super delicious Steak <strong>Hamburger</strong>
        </h2>

        <h2 className="ingredients__price">
          <strong>$25.00</strong>
        </h2>

        <PrRedBtn>Order Now</PrRedBtn>
      </div>
    </section>
  );
}

export default HomeIngredients;
