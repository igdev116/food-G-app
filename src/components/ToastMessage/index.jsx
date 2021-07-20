import React from "react";
import PropTypes from "prop-types";

// react-toastify
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

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

function ToastMessage(type) {
  const CloseButton = () => (
    <div className="toast-msg__close">
      <ExitToAppIcon />
    </div>
  );

  const ToastBody = () => (
    <div
      className="toast-msg"
      style={{ backgroundColor: `${types[type].color}` }}
    >
      <div className="toast-msg__icon">{types[type].setIcon()}</div>
      <div className="toast-msg__content">
        <h4 className="toast-msg__title">{types[type].title}!</h4>
        <div className="toast-msg__description">{types[type].description}</div>
      </div>
    </div>
  );

  return toast(ToastBody(), {
    closeButton: CloseButton(),
    autoClose: 3000,
    hideProgressBar: true,
    pauseOnHover: false,
  });
}

export default ToastMessage;
