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
  console.log("maxPage", maxPage);

  const handlePagination = (page) => {
    const { selected } = page;

    const params = {
      _page: selected + 1,
    };

    getProducts(name, params);
    setCurrentPage(page);
  };

  return (
    // <div className="pagination">
    //   <div className="pagination__btns">
    //     {/* <Button
    //       disabled={currentPage <= 1 ? true : false}
    //       onClick={() => handlePagination(currentPage - 1)}
    //       className="pagination__btn pagination__btn--prev"
    //     >
    //       <NavigateBeforeIcon />
    //     </Button> */}
    //     {/* {maxPage &&
    //       Array(maxPage)
    //         .fill()
    //         .map((_, index) =>
    //           index === maxPage - 2 ? (
    //             <Button className="pagination__btn ">...</Button>
    //           ) : (
    //             <Button
    //               key={index}
    //               onClick={() => handlePagination(index + 1, true)}
    //               className={
    //                 paginationActive === index
    //                   ? "pagination__btn active"
    //                   : "pagination__btn"
    //               }
    //             >
    //               {index + 1 || "..."}
    //             </Button>
    //           )
    //         )} */}

    //     {/* <Button
    //       disabled={currentPage >= maxPage ? true : false}
    //       onClick={() => handlePagination(currentPage + 1)}
    //       className="pagination__btn pagination__btn--next"
    //     >
    //       <NavigateNextIcon />
    //     </Button> */}
    //   </div>
    // </div>
    <ReactPaginate
      previousLabel={<NavigateBeforeIcon />}
      nextLabel={<NavigateNextIcon />}
      pageCount={maxPage}
      pageRangeDisplayed={4}
      onPageChange={handlePagination}
      marginPagesDisplayed={1}
      containerClassName={"pagination"}
      forcePage={paginationActive}
    />
  );
}

export default Pagination;
