import React from "react";
import PropTypes from "prop-types";

import PrRedBtn from "components/CusButtons";

import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

import "./HomeBanner.scss";

HomeBanner.propsTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  strong: PropTypes.string,
  className: PropTypes.string,
};

HomeBanner.defaultProps = {
  title: "",
  description: "",
  strong: "",
  className: "",
};

function HomeBanner(props) {
  const { title, description, strong, className } = props;

  return (
    <div className={`banner ${className}`}>
      <div className="banner__container">
        <div className="banner__title">{title}</div>
        <div className="banner__description">
          {description}
          <strong>{strong}</strong>
        </div>

        <PrRedBtn>
          <AddShoppingCartIcon className="banner__icon" />
          Order now
        </PrRedBtn>
      </div>
    </div>
  );
}

export default HomeBanner;
