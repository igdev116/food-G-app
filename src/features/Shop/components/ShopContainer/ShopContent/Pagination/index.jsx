import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";

import { ApiContext } from "context/ApiProvider";

// react paginate
import ReactPaginate from "react-paginate";

// material ui core
import { Button } from "@material-ui/core";

// material ui icons
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

import "./Pagination.scss";

function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const { name } = useParams();

  const { getProducts, totalRows, paginationActive } = useContext(ApiContext);
  const maxPage = Math.ceil(totalRows[name] / 16);

  const handlePagination = (page) => {
    const { selected } = page;

    const params = {
      _page: selected + 1,
    };

    getProducts(name, params);
    setCurrentPage(page);
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
