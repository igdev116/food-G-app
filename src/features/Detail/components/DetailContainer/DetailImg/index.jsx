import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { MOBILE_BREAKPOINT } from "constants/breakpoints";

// react img magnifiers
import { SideBySideMagnifier } from "react-image-magnifiers";

import "./DetailImg.scss";

DetailImg.propsTypes = {
  product: PropTypes.object,
};

DetailImg.defaultProps = {
  product: null,
};

function DetailImg(props) {
  const { product } = props;
  const { img } = product ? product : "";

  const [isAtDesktop, setIsAtDesktop] = useState(true);
  const [isLast, setIsLast] = useState(false);

  // reset img when window is resized
  useEffect(() => {
    const handleResizeWindow = () => {
      if (window.innerWidth > MOBILE_BREAKPOINT) {
        setIsAtDesktop(true);
      } else {
        setIsAtDesktop(false);
      }
    };

    window.addEventListener("resize", handleResizeWindow);

    return window.removeEventListener("resize", handleResizeWindow);
  }, []);

  return (
    product && (
      <div className="detail-img">
        {isAtDesktop ? (
          <SideBySideMagnifier
            className={isLast ? "detail-img__main last" : "detail-img__main"}
            imageSrc={img}
            imageAlt="Foods"
            alwaysInPlace={true}
            transitionSpeedInPlace={0.3}
          />
        ) : (
          <div
            className={isLast ? "detail-img__main last" : "detail-img__main"}
          >
            <img className="detail-img__main-mobile" src={img} alt="Foods" />
          </div>
        )}

        <div className="detail-img__slides">
          <div
            onClick={() => setIsLast(false)}
            className={isLast ? "detail-img__slide last" : "detail-img__slide"}
          >
            <img src={img} alt="Slide" />
          </div>
          <div
            onClick={() => setIsLast(true)}
            className={isLast ? "detail-img__slide" : "detail-img__slide last"}
          >
            <img src={img} alt="Slide" />
          </div>
        </div>
      </div>
    )
  );
}

export default DetailImg;
