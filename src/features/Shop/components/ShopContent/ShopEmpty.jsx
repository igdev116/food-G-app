import LoadedImage from "components/LoadedImage";

import EmptyShopImg from "assets/svgs/Shop/empty-shop.svg";

import "./ShopEmpty.scss";

function ShopEmpty() {
  return (
    <div className="shop-empty">
      <img src={LoadedImage(EmptyShopImg)} alt="Empty shop" />
      <h2 className="shop-empty__title">
        There is no product you are looking for 🕵️
      </h2>
    </div>
  );
}

export default ShopEmpty;
