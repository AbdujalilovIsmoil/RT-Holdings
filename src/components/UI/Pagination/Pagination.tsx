import "./index.css";
// import { useState } from "react";
import ReactPaginate from "react-paginate";

const items: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

// function Items({ currentItems }) {
//   return (
//     <>
//       {currentItems &&
//         currentItems.map((item: number) => (
//           <div>
//             <h3>Item #{item}</h3>
//           </div>
//         ))}
//     </>
//   );
// }

function PaginatedItems({ itemsPerPage }: any) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  //   const [itemOffset, setItemOffset] = useState<number>(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  //   const endOffset = itemOffset + itemsPerPage;
  //   const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    // setItemOffset(newOffset);
  };

  return (
    <>
      {/* <Items currentItems={currentItems} /> */}
      <ReactPaginate
        nextLabel=">"
        breakLabel="..."
        previousLabel="<"
        pageCount={pageCount}
        pageRangeDisplayed={2}
        renderOnZeroPageCount={null}
        onPageChange={handlePageClick}
        nextLinkClassName="pagination-button"
        breakClassName="pagination-break"
        pageLinkClassName="pagination-button"
        previousLinkClassName="pagination-button"
        containerClassName="pagination-container"
        activeLinkClassName="pagination-active-button"
      />
    </>
  );
}

export default PaginatedItems;
