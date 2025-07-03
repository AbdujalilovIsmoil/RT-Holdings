"use client";

import "./style.css";
import ReactPaginate from "react-paginate";

const items: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function PaginatedItems({ itemsPerPage }: { itemsPerPage: number }) {
  const pageCount = Math.ceil(items.length / itemsPerPage);

  return (
    <>
      <ReactPaginate
        nextLabel='>'
        breakLabel='...'
        previousLabel='<'
        pageCount={pageCount}
        pageRangeDisplayed={2}
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
