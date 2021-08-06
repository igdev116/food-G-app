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

const toastTypes = {
  success: {
    title: "Success",
    description: "The product has been added to cart",
    color: "#43d787",
    setIcon: () => <DoneOutlinedIcon style={{ fill: "#43d787" }} />,
  },
  wishlist: {
    title: "Success",
    description: "The product has been added to your favorites",
    color: "#f766ad",
    setIcon: () => <LoyaltyOutlinedIcon style={{ fill: "#f766ad" }} />,
  },
  warning: {
    title: "Warning",
    description: "Your cart is empty!",
    color: "#ffbb00",
    setIcon: () => <PriorityHighOutlinedIcon style={{ fill: "#ffbb00" }} />,
  },
};

function ToastMessage(type) {
  const toastType = toastTypes[type];

  const CloseButton = () => (
    <div className="toast-msg__close">
      <ExitToAppIcon />
    </div>
  );

  const ToastBody = () => (
    <div
      className="toast-msg"
      style={{ backgroundColor: `${toastType.color}` }}
    >
      <div className="toast-msg__icon">{toastType.setIcon()}</div>
      <div className="toast-msg__content">
        <h4 className="toast-msg__title">{toastType.title}!</h4>
        <div className="toast-msg__description">{toastType.description}</div>
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

ToastMessage.propsTypes = {
  type: PropTypes.string,
};

ToastMessage.defaultProps = {
  type: PropTypes.string,
};

export default ToastMessage;
