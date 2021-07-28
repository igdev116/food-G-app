import React from "react";

import styled from "styled-components";

import "./styles.scss";

const Img = styled.img`
  top: ${(p) => (p.top ? p.top + "%" : "unset")};
  right: ${(p) => (p.right ? p.right + "px" : "unset")};
  bottom: ${(p) => (p.bottom ? p.bottom + "%" : "unset")};
  left: ${(p) => (p.left ? p.left + "px" : "unset")};
  z-index: ${(p) => (p.zIndex ? p.zIndex : -1)};

  width: ${(p) => p.width}rem;

  fill: red;

  animation-duration: ${(p) => p.duration}s;
  animation-delay: ${(p) => p.delay && p.delay + "s"};
`;

function BackgroundIcon(props) {
  const {
    index,
    width,
    top,
    right,
    bottom,
    left,
    type,
    duration,
    delay,
    zIndex,
  } = props;

  const importSvgs = (r) => r.keys().map(r);
  const svgData = importSvgs(
    require.context("assets/svgs", true, /\.(png|jpe?g|svg)$/)
  ).map((item) => item.default);

  return (
    <Img
      src={svgData[index]}
      width={width}
      top={top}
      right={right}
      bottom={bottom}
      left={left}
      duration={duration}
      delay={delay}
      zIndex={zIndex}
      className={`bg-icon bg-icon--${type}`}
      alt="Background icon"
    />
  );
}

export default BackgroundIcon;
