import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { ApiContext } from "context/ApiProvider";
import { PrevFilterContext } from "context/PrevFilterProvider";
import shopApi from "api/shopApi";

// react paginate
import ReactPaginate from "react-paginate";

// material ui icons
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

import "./Pagination.scss";

function Pagination() {
  const [filteredProductsLen, setFilteredProductsLen] = useState(0);

  const { name } = useParams();

  const { handlePrevious } = useContext(PrevFilterContext);
  const { getProducts, totalRows, paginationActive } = useContext(ApiContext);

  const { prevPrice, prevRate, prevSearch } = handlePrevious();
  const maxPage =
    prevPrice || prevRate || prevSearch
      ? Math.ceil(filteredProductsLen / 16)
      : Math.ceil(totalRows[name] / 16);

  useEffect(() => {
    const getFilteredProductsLen = async () => {
      if (prevPrice || prevRate || prevSearch) {
        const response = await shopApi.getAll(
          name,
          prevPrice || JSON.parse(prevRate) || prevSearch
        );

        setFilteredProductsLen(response.length);
      }
    };

    getFilteredProductsLen();
  }, [name, prevPrice, prevRate, prevSearch]);

  const handlePagination = (page) => {
    const { selected } = page;

    const params = {
      _page: selected + 1,
    };

    handlePrevious("pagination");
    getProducts(name, params);
  };

  return (
    <ReactPaginate
      previousLabel={<NavigateBeforeIcon />}
      nextLabel={<NavigateNextIcon />}
      pageCount={maxPage}
      pageRangeDisplayed={3}
      onPageChange={handlePagination}
      marginPagesDisplayed={1}
      containerClassName={"pagination"}
      forcePage={paginationActive}
    />
  );
}

export default Pagination;
// if filter product by price or rate
// reset totalRows with products length

// dispatch action to store to get filtered products length
