import PropTypes from "prop-types";

// styled component
import styled from "styled-components";

import "./styles.scss";

const Img = styled.img`
  top: ${(p) => (p.top ? p.top + "%" : "unset")};
  right: ${(p) => (p.right ? p.right + "px" : "unset")};
  bottom: ${(p) => (p.bottom ? p.bottom + "%" : "unset")};
  left: ${(p) => (p.left ? p.left + "px" : "unset")};
  z-index: ${(p) => (p.zIndex ? p.zIndex : -1)};

  width: ${(p) => p.width}rem;

  animation-duration: ${(p) => p.duration}s;
  animation-delay: ${(p) => p.delay && p.delay + "s"};
`;

function BackgroundIcon(props) {
  const {
    src,
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

  return (
    <Img
      src={src}
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

BackgroundIcon.propTypes = {
  src: PropTypes.string,
  width: PropTypes.string,
  top: PropTypes.string,
  right: PropTypes.string,
  bottom: PropTypes.string,
  left: PropTypes.string,
  type: PropTypes.string,
  duration: PropTypes.string,
  delay: PropTypes.string,
  zIndex: PropTypes.string,
};

BackgroundIcon.defaultProps = {
  src: "",
  width: "",
  top: "",
  right: "",
  bottom: "",
  left: "",
  type: "",
  duration: "",
  delay: "",
  zIndex: "",
};

export default BackgroundIcon;
