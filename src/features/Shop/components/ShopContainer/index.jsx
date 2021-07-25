import React, { useContext } from "react";
import { useHistory, useParams } from "react-router-dom";

import { ApiContext } from "context/ApiProvider";

import ShopContent from "./ShopContent";
import ShopFilters from "./ShopFilters";

import "./ShopContainer.scss";

function ShopContainer() {
  const { name } = useParams();
  const history = useHistory();

  const { getProducts } = useContext(ApiContext);

  // when browser loaded get url to re-render
  window.addEventListener("load", () => {
    const params = history.location.search;

    if (params) {
      const paramsObj = JSON.parse(
        '{"' +
          decodeURI(
            params.substr(1).replace(/&/g, '","').replace(/=/g, '":"')
          ) +
          '"}'
      );

      getProducts(name, paramsObj);
    } else {
      getProducts(name);
    }
  });

  return (
    <div className="shop-container">
      <ShopFilters />
      <ShopContent />
    </div>
  );
}

export default ShopContainer;
