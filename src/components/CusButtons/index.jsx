import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

import { ApiContext } from "context/ApiProvider";

// material ui core
import { Button } from "@material-ui/core";

import "./CusButtons.scss";

PrRedBtn.propsTypes = {
  type: PropTypes.string,
};

PrRedBtn.defaultProps = {
  type: "",
};

function PrRedBtn(props) {
  const { type, children } = props;

  const history = useHistory();

  const { getProducts } = useContext(ApiContext);

  const handleMovePage = () => {
    if (type === "shop") {
      history.push("/shop/best-foods");
      getProducts("best-foods");
    }
  };

  return (
    <div onClick={handleMovePage} className="pr-red-btn">
      <Button className="btn" variant="contained">
        {children}
      </Button>
    </div>
  );
}

export default PrRedBtn;
