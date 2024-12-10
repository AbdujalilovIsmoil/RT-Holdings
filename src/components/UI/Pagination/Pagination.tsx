// import classNames from "classnames";
// import styles from "./index.module.css";
// import ReactPaginate from "react-paginate";

// const items: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function PaginatedItems() {
  // const pageCount = Math.ceil(items.length / itemsPerPage);

  return (
    <>
      {/* <ReactPaginate
        nextLabel=">"
        breakLabel="..."
        previousLabel="<"
        pageCount={pageCount}
        pageRangeDisplayed={2}
        renderOnZeroPageCount={null}
        breakClassName={classNames(styles["pagination-break"])}
        nextLinkClassName={classNames(styles["pagination-button"])}
        pageLinkClassName={classNames(styles["pagination-button"])}
        previousLinkClassName={classNames(styles["pagination-button"])}
        containerClassName={classNames(styles["pagination-container"])}
        activeLinkClassName={classNames(styles["pagination-active-button"])}
      /> */}
    </>
  );
}

export default PaginatedItems;
