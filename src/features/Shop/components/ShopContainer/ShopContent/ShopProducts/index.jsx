import React, { useContext, useState } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

import PRIMARY_RED_COLOR from "constants/colors";
import { ApiContext } from "contexts/ApiProvider";

// material ui icons
import CircularProgress from "@material-ui/core/CircularProgress";

import ShopProduct from "components/ShopProduct";
import Dialog from "components/Dialog";

import "./ShopProducts.scss";

ShopProducts.propsTypes = {
  isFlex: PropTypes.bool.isRequired,
};

function ShopProducts(props) {
  const { isFlex } = props;
  const [isShowDialog, setIsShowDialog] = useState(false);

  const { isLoading } = useContext(ApiContext);
  const productData = useSelector((state) => state.shop);

  const toggleDialog = () => {
    setIsShowDialog(true);
  };

  return isLoading ? (
    <div className="spinner">
      <CircularProgress thickness={5} style={{ color: PRIMARY_RED_COLOR }} />
    </div>
  ) : (
    <>
      <div className={isFlex ? "shop-products display-flex" : "shop-products"}>
        {productData &&
          productData.map((item, index) => (
            <ShopProduct toggleDialog={toggleDialog} key={item.id} {...item} />
          ))}
      </div>

      <Dialog isShow={isShowDialog} setIsShow={setIsShowDialog} />
    </>
  );
}

export default ShopProducts;
