import React from "react";
import PropTypes from "prop-types";

import PrimaryButton from "components/PrimaryButton";

import { Container } from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

import "./HomeBanner.scss";

function HomeBanner(props) {
  const { title, description, strong, background } = props;

  return (
    <div
      className="home-banner"
      style={{ backgroundImage: `url(${background})` }}
    >
      <Container className="container-ui">
        <div className="home-banner__container">
          <div className="home-banner__title">{title}</div>
          <div className="home-banner__description">
            {description}
            <strong>{strong}</strong>
          </div>

          <PrimaryButton subClass="red" page="shop">
            <AddShoppingCartIcon className="home-banner__icon" />
            Order now
          </PrimaryButton>
        </div>
      </Container>
    </div>
  );
}

HomeBanner.propsTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  strong: PropTypes.string,
  background: PropTypes.string,
};

export default HomeBanner;
