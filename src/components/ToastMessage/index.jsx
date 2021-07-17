import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

// material ui icons
import DoneOutlinedIcon from "@material-ui/icons/DoneOutlined";
import LoyaltyOutlinedIcon from "@material-ui/icons/LoyaltyOutlined";
import PriorityHighOutlinedIcon from "@material-ui/icons/PriorityHighOutlined";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import "./ToastMessage.scss";

ToastMessage.propsTypes = {
  type: PropTypes.string,
};

ToastMessage.defaultProps = {
  type: PropTypes.string,
};

const types = {
  success: {
    title: "Success",
    description: "The product has been added to cart",
    color: "#43d787",
    setIcon: () => <DoneOutlinedIcon style={{ fill: "#43d787" }} />,
  },
  favourite: {
    title: "Success",
    description: "The product has been added to your favorites",
    color: "#f766ad",
    setIcon: () => <LoyaltyOutlinedIcon style={{ fill: "#f766ad" }} />,
  },
  warning: {
    title: "Warning",
    description: "You have added this product to your favorites",
    color: "#ffbb00",
    setIcon: () => <PriorityHighOutlinedIcon style={{ fill: "#ffbb00" }} />,
  },
};

function ToastMessage(props) {
  const toastMsgData = useSelector((state) => state.toastMessage);

  return (
    // <div id="toast-msg">
    //   {toastMsgData.map((type, index) => (
    //   ))}
    // </div>
    <div
      className="toast-msg"
      style={{ backgroundColor: `${types["success"].color}` }}
    >
      <div className="toast-msg__icon">{types["success"].setIcon()}</div>
      <div className="toast-msg__content">
        <h4 className="toast-msg__title">{types["success"].title}!</h4>
        <div className="toast-msg__description">
          {types["success"].description}
        </div>
      </div>
      <div className="toast-msg__close">
        <ExitToAppIcon />
      </div>
    </div>
  );
}

export default ToastMessage;
