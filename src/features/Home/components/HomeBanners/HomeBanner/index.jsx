import React from "react";
import PropTypes from "prop-types";

import PrRedBtn from "components/CusButtons";

import { Container } from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

import "./HomeBanner.scss";

HomeBanner.propsTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  strong: PropTypes.string,
  background: PropTypes.string,
};

HomeBanner.defaultProps = {
  title: "",
  description: "",
  strong: "",
  background: "",
};

function HomeBanner(props) {
  const { title, description, strong, className, background } = props;

  return (
    <div
      className={`banner`}
      style={{ backgroundImage: `url(/imgs/home/${background})` }}
    >
      <Container className="container-ui">
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
      </Container>
    </div>
  );
}

export default HomeBanner;
