import { useState } from "react";
import PropTypes from "prop-types";

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
  const [isLast, setIsLast] = useState(false);

  return (
    product && (
      <div className="detail-img">
        <SideBySideMagnifier
          className={isLast ? "detail-img__main last" : "detail-img__main"}
          imageSrc={img}
          imageAlt="Foods"
          alwaysInPlace={true}
          transitionSpeedInPlace={0.3}
        />

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
