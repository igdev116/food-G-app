import { useSelector } from "react-redux";

import usePrice from "hooks/usePrice";

import PrimaryButton from "components/PrimaryButton";

import "./CheckoutAside.scss";

function CheckoutAside() {
  const cartProducts = useSelector((state) => state.cart);
  const { totalPrice, discount } = usePrice();

  return (
    <aside>
      <ul className="checkout-products">
        {cartProducts.map(({ id, name, img, qnt, country, price }) => (
          <li key={id} className="checkout-product">
            <div className="checkout-product__img">
              <img src={img} alt="Checkout product" />
              <span className="checkout-product__qnt">{qnt}</span>
            </div>
            <div className="checkout-product__content">
              <h3 className="checkout-product__name">{name}</h3>
              <span className="checkout-product__country">{country}</span>
            </div>
            <span className="checkout-product__price">${price}</span>
          </li>
        ))}
      </ul>

      <div className="checkout-discount">
        <input
          type="text"
          className="checkout-discount__input"
          placeholder="Gift card or discount code"
        />
        <PrimaryButton subClass="red">Apply</PrimaryButton>
      </div>

      <div className="checkout-detail">
        <div className="checkout-detail__row">
          <span className="checkout-detail__label">Discount</span>
          <span className="checkout-detail__content">${discount}</span>
        </div>
        <div className="checkout-detail__row">
          <span className="checkout-detail__label">Shipping Cost</span>
          <span className="checkout-detail__content">Free</span>
        </div>
        <div className="checkout-detail__row">
          <span className="checkout-detail__label">Taxes (estimated)</span>
          <span className="checkout-detail__content">$0</span>
        </div>
      </div>

      <div className="checkout-total">
        <span className="checkout-total__label">Total</span>
        <span className="checkout-total__price">${totalPrice}</span>
      </div>
    </aside>
  );
}

export default CheckoutAside;
