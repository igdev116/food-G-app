import React, { useState } from "react";

import "./Momo.scss";

function Momo(props) {
  const [slideNum, setSlideNum] = useState(0);

  const { children } = props;

  const length = children.length;

  return (
    <div
      className="slides"
      style={{ transform: `translateX(${-100 * slideNum}%)` }}
    >
      {/* render */}
      <div className="slides-wrapper">{children}</div>

      {/* pagination */}
      <div className="dots">
        {Array(length)
          .fill()
          .map((item, index) => {
            return (
              <span
                // onClick={() => moveDot(index)}
                key={index}
                className={slideNum === index ? "dot active" : "dot"}
              ></span>
            );
          })}
      </div>
    </div>
  );
}

function MomoSlide(props) {
  const { children } = props;

  return <div className="slide">{children}</div>;
}

export { MomoSlide };
export default Momo;
