// material ui core
import { Container } from "@material-ui/core";

// material ui icons
import ShoppingBasketOutlinedIcon from "@material-ui/icons/ShoppingBasketOutlined";
import { setIsAtCheckout } from "components/Header/headerSlice";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import "./styles.scss";

function CheckoutSuccess() {
  const history = useHistory();

  const dispatch = useDispatch();

  const moveToShop = () => {
    const action = setIsAtCheckout(false);

    history.push("/shop/best-foods");
    dispatch(action);
  };

  return (
    <Container>
      <div class="checkout-success">
        <div class="checkout-success__container">
          <div class="checkout-success__background">
            <svg
              viewBox="0 0 65 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 25L27.3077 44L58.5 7"
                stroke="white"
                stroke-width="13"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div class="checkout-success__shadow"></div>
        </div>
        <h2 className="checkout-success__title">
          Your purchase was successfull 🍔
        </h2>
        <div onClick={moveToShop} className="checkout-success__btn">
          <ShoppingBasketOutlinedIcon />
          <span>Buy more</span>
        </div>
      </div>
    </Container>
  );
}

export default CheckoutSuccess;
