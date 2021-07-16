import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

import { ApiContext } from "context/ApiProvider";

// material ui core
import { Button } from "@material-ui/core";

import "./PrimaryButton.scss";

PrimaryButton.propsTypes = {
  type: PropTypes.string,
};

PrimaryButton.defaultProps = {
  type: "",
};

function PrimaryButton(props) {
  const { type, subClass, children } = props;

  const history = useHistory();

  const { getProducts } = useContext(ApiContext);

  const handleMovePage = () => {
    if (type === "shop") {
      history.push("/shop/best-foods");
      getProducts("best-foods");
    }
  };

  return (
    <Button
      onClick={handleMovePage}
      className={`primary-btn ${subClass || ""}`}
    >
      {children}
    </Button>
  );
}

export default PrimaryButton;
