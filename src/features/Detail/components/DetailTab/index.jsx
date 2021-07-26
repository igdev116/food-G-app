import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

import DetailTabComment from "./DetailTabComment";

import "./DetailTab.scss";

const tableData = [
  {
    title: null,
    description: "28 cm size",
    ingredients: "Ingredients",
  },
  {
    title: "24",
    description: "28 cm size",
    ingredients: "Egg",
  },
  {
    title: "728",
    description: "Energy",
    ingredients: "Milk Protein",
  },
  {
    title: "1054",
    description: "Calo",
    ingredients: "Sesame",
  },
  {
    title: "68",
    description: "Fat",
    ingredients: "Lactose",
  },
  {
    title: "25",
    description: "Gluxit",
    ingredients: "Gluten",
  },
  {
    title: "548",
    description: "Protein",
    ingredients: "Mustard",
  },
];

function DetailTab() {
  const [isActive, setIsActive] = useState(true);
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const [offsetLeft, setOffsetLeft] = useState(0);
  const [offsetWidth, setOffsetWidth] = useState(0);

  const { name } = useParams();
  const paramsName = name.replace("-", " ");

  const firtBtn = firstRef.current;
  const secondBtn = secondRef.current;

  const handleSelect = (pos) => {
    if (firtBtn && secondBtn) {
      setOffsetLeft((pos === "first" ? firtBtn : secondBtn).offsetLeft);
      setOffsetWidth((pos === "first" ? firtBtn : secondBtn).offsetWidth);
      setIsActive(pos === "first" ? true : false);
    }
  };

  // set initial offsetLeft and offsetWidth
  useEffect(() => {
    if (firtBtn) {
      setOffsetLeft(firtBtn.offsetLeft);
      setOffsetWidth(firtBtn.offsetWidth);
    }
  }, [firtBtn]);

  return (
    <div className="detail-tab">
      <div className="detail-tab__btns">
        <div
          ref={firstRef}
          onClick={() => handleSelect("first")}
          className={isActive ? "detail-tab__btn active" : "detail-tab__btn"}
        >
          <span>Description</span>
        </div>

        <div
          ref={secondRef}
          onClick={() => handleSelect("second")}
          className={!isActive ? "detail-tab__btn active" : "detail-tab__btn"}
        >
          <span>Reviews</span>
          <span>(5)</span>
        </div>
        <div
          style={{ left: offsetLeft, width: offsetWidth }}
          className="detail-tab__btn-background"
        ></div>
      </div>

      <div className="detail-tab__content">
        <p className="detail-tab__content-description">
          Although the legendary Double Burger really needs no introduction,
          please allow us… Tucked in between three soft buns are two all-beef
          patties, cheddar cheese, ketchup, onion, pickles and iceberg lettuce.
          Hesburger’s own paprika and cucumber mayonnaise add the crowning
          touch. Oh baby!
        </p>

        <div className="detail-tab__content-table">
          {tableData.map(({ title, description, ingredients }) => (
            <div className="detail-tab__content-col">
              <div className="detail-tab__content-col-wrapper">
                <div className="detail-tab__content-col-title">
                  {title ? title : paramsName}
                </div>
                <div className="detail-tab__content-col-description">
                  {description}
                </div>
              </div>
              <div className="detail-tab__content-ingredients">
                {ingredients}
              </div>
            </div>
          ))}
        </div>
      </div>
      <DetailTabComment />

      <div className="detail-tab__review"></div>
    </div>
  );
}

export default DetailTab;
