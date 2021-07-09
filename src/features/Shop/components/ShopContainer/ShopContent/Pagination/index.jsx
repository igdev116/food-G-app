import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";

import { ApiContext } from "context/ApiProvider";
import { PrevFilterContext } from "context/PrevFilterProvider";

// react paginate
import ReactPaginate from "react-paginate";

// material ui icons
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

import "./Pagination.scss";

function Pagination() {
  const { name } = useParams();

  const { handlePrevious } = useContext(PrevFilterContext);
  const { getProducts, totalRows, paginationActive } = useContext(ApiContext);
  const maxPage = Math.ceil(totalRows[name] / 16);

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
