import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import shopApi from "api/shopApi";
import { setDetailProducts } from "features/Detail/detailSlice";

import ShopProduct from "components/ShopProduct";
import Dialog from "components/Dialog";

import "./DetailProducts.scss";
import "assets/styles/_typography.scss";

function DetailProducts() {
  const [products, setProducts] = useState([]);
  const [isShowDialog, setIsShowDialog] = useState(false);
  const dispatch = useDispatch();

  const productData = useSelector((state) => state.detail);

  const toggleDialog = () => {
    setIsShowDialog(true);
  };

  // get products from store to render
  useEffect(() => {
    setProducts(productData.slice(0, 5));

    return () => {
      setProducts(productData.slice(0, 5));
    };
  }, [productData]);

  // when browser loaded get url to re-render
  window.addEventListener("load", () => {
    const getProducts = async (type) => {
      const response = await shopApi.getAll(type);
      const action = setDetailProducts(response);

      dispatch(action);
    };

    getProducts("burgers");
  });

  return (
    <div className="detail-products">
      <div className="pr-yellow-text">Best foods</div>
      <h2 className="pr-heading-text">Related Products</h2>
      <div className="detail-products__wrapper">
        {products &&
          products.map((item, index) => (
            <ShopProduct toggleDialog={toggleDialog} key={index} {...item} />
          ))}
      </div>
      <Dialog isShow={isShowDialog} setIsShow={setIsShowDialog} />
    </div>
  );
}

export default DetailProducts;
