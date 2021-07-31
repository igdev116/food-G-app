import PropTypes from "prop-types";

import { PRIMARY_WHITE_COLOR } from "constants/colors";
import { PHONE_BREAKPOINT, TABLET_BREAKPOINT } from "constants/breakpoints";

// styled components
import styled from "styled-components";

const EmptyCartContainer = styled.div`
  position: ${(prop) => prop.type === "shop" && "absolute"};
  left: ${(prop) => prop.type === "shop" && 0};
  right: ${(prop) => prop.type === "shop" && 0};
  z-index: -1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${(prop) =>
    (prop.type === "shop" || prop.type === "wishlist") && "100%"};
  margin-top: ${(prop) => prop.type === "shop" && "-35px"};
  margin-bottom: 40px;

  img {
    width: ${(prop) =>
      prop.type === "shop"
        ? "23.5rem"
        : prop.type === "wishlist"
        ? "14.5rem"
        : "20.5rem"};
    margin-bottom: ${(prop) => (prop.type === "wishlist" ? "20px" : "35px")};

    @media (max-width: ${TABLET_BREAKPOINT}px) {
      width: ${(prop) => prop.type === "wishlist" && "25.5rem"};
      margin-bottom: ${(prop) => prop.type === "wishlist" && "35px"};
    }

    @media (max-width: ${PHONE_BREAKPOINT}px) {
      width: 15.5rem;
      margin-bottom: 25px;
    }
  }

  h2 {
    font-size: ${(prop) => (prop.type === "wishlist" ? "1.65rem" : "2.1rem")};
    text-transform: capitalize;

    color: ${(prop) => prop.type === "checkout" && PRIMARY_WHITE_COLOR};

    @media (max-width: ${TABLET_BREAKPOINT}px) {
      font-size: ${(prop) => prop.type === "wishlist" && "2.1rem"};
    }

    @media (max-width: ${PHONE_BREAKPOINT}px) {
      font-size: 1.8rem;
    }
  }
`;

function EmptyCart(props) {
  const { src, type } = props;

  return (
    <EmptyCartContainer type={type}>
      <img src={src} alt="Empty cart" />
      <h2>Your {type === "wishlist" ? "wishlist" : "cart"} is empty 🍔</h2>
    </EmptyCartContainer>
  );
}

EmptyCart.propTypes = {
  src: PropTypes.string,
  type: PropTypes.string,
};

EmptyCart.defaultProps = {
  src: "",
  type: "",
};

export default EmptyCart;
