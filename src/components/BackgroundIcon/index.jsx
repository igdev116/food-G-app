import React from "react";

import styled from "styled-components";

import "./BackgroundIcon.scss";

function BackgroundIcon(props) {
  const { index, width, top, right, bottom, left, type, duration, delay } =
    props;

  const Img = styled.img`
    top: ${top ? top + "%" : "unset"};
    right: ${right ? right + "px" : "unset"};
    bottom: ${bottom ? bottom + "%" : "unset"};
    left: ${left ? left + "px" : "unset"};

    width: ${width}rem;

    animation-duration: ${duration}s;
    animation-delay: ${delay && delay + "s"};
  `;

  const importSvgs = (r) => r.keys().map(r);
  const svgData = importSvgs(
    require.context("assets/svgs", true, /\.(png|jpe?g|svg)$/)
  ).map((item) => item.default);

  return (
    <Img
      src={svgData[index]}
      className={`bg-icon bg-icon--${type}`}
      alt="background-icon"
    />
  );
}

export default BackgroundIcon;
