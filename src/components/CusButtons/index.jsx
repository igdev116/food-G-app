import React from "react";

import { Button } from "@material-ui/core";

import "./CusButtons.scss";

function PrRedBtn(props) {
  return (
    <div className="pr-red-btn">
      <Button className="btn" variant="contained">
        {props.children}
      </Button>
    </div>
  );
}

export default PrRedBtn;
