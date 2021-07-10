import React from "react";

import "./DetailTab.scss";

const tableData = [
  {
    title: "Pizza",
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
  return (
    <div className="detail-tab">
      <div className="detail-tab__btns">
        <div className="detail-tab__btn active">Description</div>
        <div className="detail-tab__btn">
          <span>Reviews</span>
          <span>(5)</span>
        </div>
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
                <div className="detail-tab__content-col-title">{title}</div>
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

      <div className="detail-tab__review"></div>
    </div>
  );
}

export default DetailTab;
