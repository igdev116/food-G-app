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
import SettingsIcon from "@material-ui/icons/Settings";

import {
  SUCCESS_COLOR,
  FAVOURITE_COLOR,
  WARNING_COLOR,
  CLOSED_COLOR,
} from "constants/colors";

import "./styles.scss";

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
        <div className="toast-msg__description">{toastType.desc}</div>
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

const toastTypes = {
  success: {
    title: "Success",
    desc: "The product has been added to cart",
    color: SUCCESS_COLOR,
    setIcon: () => <DoneOutlinedIcon style={{ fill: SUCCESS_COLOR }} />,
  },
  wishlist: {
    title: "Success",
    desc: "The product has been added to your favorites",
    color: FAVOURITE_COLOR,
    setIcon: () => <LoyaltyOutlinedIcon style={{ fill: FAVOURITE_COLOR }} />,
  },
  warning: {
    title: "Warning",
    desc: "Your cart is empty!",
    color: WARNING_COLOR,
    setIcon: () => <PriorityHighOutlinedIcon style={{ fill: WARNING_COLOR }} />,
  },
  closed: {
    title: "Closed",
    desc: "This feature is currently closed. Try login with Google or Facebook",
    color: CLOSED_COLOR,
    setIcon: () => <SettingsIcon style={{ fill: CLOSED_COLOR }} />,
  },
};

ToastMessage.propsTypes = {
  type: PropTypes.string,
};

export default ToastMessage;
