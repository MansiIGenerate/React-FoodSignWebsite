import React from 'react';
import '../../Asset/styles/Paginationsto.css';

const PaginationsComman = ({totalItems,itemsPerPage,currentPage,onPageChange,  onDelete}) => {

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pageNumbers = [...Array(totalPages).keys()].map((number) => number + 1);

  const handlePageClick = (pageNumber) => {
    if (onDelete && typeof onDelete === 'function') {
      onDelete();
    }

    const LastItemLastPage =
      pageNumber === totalPages && totalItems % itemsPerPage === 0;
    if (LastItemLastPage) {
      onPageChange(currentPage -1);
    } else {
      onPageChange(pageNumber);
    }
  };

  // const handlePageClick = (pageNumber) => {

  //   const LastItemLastPage =
  //     pageNumber === totalPages && totalItems % itemsPerPage === 1;
  //   onDelete();

  //   if (LastItemLastPage) {
  //     onPageChange(currentPage - 1);
  //   } else {
  //     onPageChange(pageNumber);
  //   }
  // };

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`page-item ${number === currentPage ? 'active' : ''}`}
          >
            <button
              className="page-link"
              onClick={() =>  handlePageClick (number)}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};


export default PaginationsComman;






// import React    from 'react';
// import "../Allcss/Paginationsto.css";

// const PaginationsComman = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
//   const totalPages = Math.ceil(totalItems / itemsPerPage);
//   const pageNumbers = [...Array(totalPages).keys()].map((number) => number + 1);

//   const handlePageClick = (pageNumber) => {
//     onPageChange(pageNumber);
//   };

//   return (
//     <nav>
//       <ul className="pagination">
//         {pageNumbers.map((number) => (
//           <li
//             key={number}
//             className={`page-item ${number === currentPage ? 'active' : ''}`}
//           >
//             <button
//               className="page-link"
//               onClick={() => handlePageClick(number)}
//             >
//               {number}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default PaginationsComman;
