import PRIMARY_RED_COLOR from "constants/colors";

// material ui core
import { CircularProgress } from "@material-ui/core";

// styled components
import styled from "styled-components";

const CheckoutLoadingContainer = styled.div`
  position: fixed;
  inset: 0;
  z-index: 999;

  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;

  background-color: rgba(0, 0, 0, 0.75);
`;

function CheckoutLoading() {
  return (
    <CheckoutLoadingContainer>
      <CircularProgress
        thickness={4}
        size={55}
        style={{ color: PRIMARY_RED_COLOR }}
      />
    </CheckoutLoadingContainer>
  );
}

export default CheckoutLoading;
