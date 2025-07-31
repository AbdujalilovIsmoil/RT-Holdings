"use client";

import "./style.css";
import ReactPaginate from "react-paginate";

function PaginatedItems({
  pageCount,
  handlePageClick,
}: {
  pageCount: number;
  handlePageClick: (event: { selected: number }) => void;
}) {
  return (
    <>
      <ReactPaginate
        nextLabel='>'
        breakLabel='...'
        previousLabel='<'
        pageCount={pageCount}
        pageRangeDisplayed={2}
        onPageChange={handlePageClick}
        renderOnZeroPageCount={null}
        breakClassName='pagination-break'
        nextLinkClassName='pagination-button'
        pageLinkClassName='pagination-button'
        previousLinkClassName='pagination-button'
        containerClassName='pagination-container'
        activeLinkClassName='pagination-active-button'
      />
    </>
  );
}

export default PaginatedItems;
