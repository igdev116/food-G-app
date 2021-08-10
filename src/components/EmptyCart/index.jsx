import PropTypes from "prop-types";

import { PRIMARY_WHITE_COLOR } from "constants/colors";
import { PHONE_BREAKPOINT, TABLET_BREAKPOINT } from "constants/breakpoints";

import LoadedImage from "components/LoadedImage";

// styled components
import styled from "styled-components";

const EmptyCartContainer = styled.div`
  position: ${(p) => p.type === "shop" && "absolute"};
  left: ${(p) => p.type === "shop" && 0};
  right: ${(p) => p.type === "shop" && 0};
  z-index: -1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${(p) => (p.type === "shop" || p.type === "wishlist") && "100%"};
  margin-top: ${(p) => p.type === "shop" && "-35px"};
  margin-bottom: ${(p) => (p.type === "wishlist" ? "0" : "40px")};

  img {
    width: ${(p) =>
      p.type === "shop"
        ? "23.5rem"
        : p.type === "wishlist"
        ? "14.5rem"
        : "20.5rem"};
    margin-bottom: ${(p) => (p.type === "wishlist" ? "20px" : "35px")};

    @media (max-width: ${TABLET_BREAKPOINT}px) {
      width: ${(p) => p.type === "wishlist" && "25.5rem"};
      margin-bottom: ${(p) => p.type === "wishlist" && "35px"};
    }

    @media (max-width: ${PHONE_BREAKPOINT}px) {
      width: 15.5rem;
      margin-bottom: 25px;
    }
  }

  h2 {
    font-size: ${(p) => (p.type === "wishlist" ? "1.65rem" : "2.1rem")};
    text-transform: capitalize;

    color: ${(p) => p.type === "checkout" && PRIMARY_WHITE_COLOR};

    @media (max-width: ${TABLET_BREAKPOINT}px) {
      font-size: ${(p) => p.type === "wishlist" && "2.1rem"};
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
      <img src={LoadedImage(src)} alt="Empty cart" />
      <h2>Your {type === "wishlist" ? "wishlist" : "cart"} is empty 🍔</h2>
    </EmptyCartContainer>
  );
}

EmptyCart.propTypes = {
  src: PropTypes.string,
  type: PropTypes.string,
};

export default EmptyCart;
