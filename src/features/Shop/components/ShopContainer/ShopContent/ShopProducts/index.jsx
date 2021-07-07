import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

import Dialog from "components/Dialog";

// material ui icons
import CircularProgress from "@material-ui/core/CircularProgress";

import ShopProduct from "./ShopProduct";
import PR_RED_COLOR from "constants/colors";
import { ApiContext } from "context/ApiProvider";

import "./ShopProducts.scss";

ShopProducts.propsTypes = {
  isFlex: PropTypes.bool.isRequired,
};

function ShopProducts(props) {
  const { isFlex } = props;
  const [products, setProducts] = useState([]);
  const [isShowDialog, setIsShowDialog] = useState(false);

  const { isLoading } = useContext(ApiContext);
  const productData = useSelector((state) => state.shop);

  const toggleDialog = () => {
    setIsShowDialog(true);
  };

  // get products from store to render
  useEffect(() => {
    setProducts(productData);

    return () => {
      setProducts(productData);
    };
  }, [productData]);

  return isLoading ? (
    <div className="spinner">
      <CircularProgress thickness={5} style={{ color: PR_RED_COLOR }} />
    </div>
  ) : (
    <>
      <div className={isFlex ? "shop-products display-flex" : "shop-products"}>
        {productData &&
          productData.map((item, index) => (
            <ShopProduct toggleDialog={toggleDialog} key={index} {...item} />
          ))}
      </div>

      <Dialog isShow={isShowDialog} setIsShow={setIsShowDialog} />
    </>
  );
}

export default ShopProducts;
