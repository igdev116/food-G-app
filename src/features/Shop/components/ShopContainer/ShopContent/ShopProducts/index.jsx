import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

import PRIMARY_RED_COLOR from "constants/colors";
import { ApiContext } from "contexts/ApiProvider";
import { SHOP_PRODUCTS_VIEW } from "constants/localStorage";

// material ui icons
import CircularProgress from "@material-ui/core/CircularProgress";

import ShopProduct from "components/ShopProduct";
import Dialog from "components/Dialog";

import "./ShopProducts.scss";
import ShopEmpty from "../ShopEmpty/ShopEmpty";
import { setShopProductsView } from "features/Shop/shopSlice";

ShopProducts.propsTypes = {
  isFlex: PropTypes.bool.isRequired,
};

function ShopProducts() {
  const [isShowDialog, setIsShowDialog] = useState(false);

  const dispatch = useDispatch();

  const { isLoading } = useContext(ApiContext);
  const { shopProducts, shopProductsView } = useSelector((state) => state.shop);

  const openDialog = () => {
    setIsShowDialog(true);
  };

  // get shop view type when user refresh page
  useEffect(() => {
    const view = localStorage.getItem(SHOP_PRODUCTS_VIEW);
    const action = setShopProductsView(view);

    dispatch(action);
  }, []);

  if (isLoading) {
    return (
      <div className="spinner">
        <CircularProgress thickness={5} style={{ color: PRIMARY_RED_COLOR }} />
      </div>
    );
  }

  return (
    <>
      {shopProducts.length <= 0 && <ShopEmpty />}

      <div
        className={
          shopProductsView === "list"
            ? "shop-products display-flex"
            : "shop-products"
        }
      >
        {shopProducts &&
          shopProducts.map((item, index) => (
            <ShopProduct openDialog={openDialog} key={item.id} {...item} />
          ))}
      </div>

      <Dialog isShow={isShowDialog} setIsShow={setIsShowDialog} />
    </>
  );
}

export default ShopProducts;
