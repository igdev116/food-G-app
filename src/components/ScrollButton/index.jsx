import React, { useState } from "react";

import ExpandLessIcon from "@material-ui/icons/ExpandLess";

import "./styles.scss";

function ScrollButton() {
  const [isShow, setIsShow] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY > 800) {
      setIsShow(true);
    } else {
      setIsShow(false);
    }
  });

  return (
    <div
      onClick={handleScrollToTop}
      className={isShow ? "scroll-btn show" : "scroll-btn"}
    >
      <div className="scroll-btn__icon">
        <ExpandLessIcon />
      </div>
    </div>
  );
}

export default ScrollButton;
