import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

// material ui core
import { Button } from "@material-ui/core";

import "./Dialog.scss";

Dialog.propsTypes = {
  isShow: PropTypes.bool,
  setIsShow: PropTypes.func,
};

Dialog.defaultProps = {
  isShow: false,
  setIsShow: null,
};

function Dialog(props) {
  const { isShow, setIsShow } = props;
  const history = useHistory();

  const hideDialog = () => {
    setIsShow(false);
  };

  const moveToSignIn = () => {
    setIsShow(false);
    history.push("/sign-in");
  };

  return (
    <div className={isShow ? "dialog show" : "dialog"}>
      <div onClick={hideDialog} className="dialog__overlay"></div>
      <div className="dialog__wrapper">
        <h2 className="dialog__title">Join with us!! 🚀</h2>
        <p className="dialog__description">
          You are not signed in. Please sign in to use this feature!
        </p>
        <div className="dialog__btns">
          <Button onClick={hideDialog} className="dialog__btn">
            Cancle
          </Button>
          <Button
            onClick={moveToSignIn}
            variant="contained"
            color="primary"
            className="dialog__btn"
          >
            Sign In
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Dialog;
