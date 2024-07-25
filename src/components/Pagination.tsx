import React from 'react';

const Pagination = ({ totalItems, itemsPerPage, currentPage, paginate }: { totalItems: number, itemsPerPage: number, currentPage: number, paginate: (pageNumber: number) => void }) => {
  const pageNumbers = Array.from({ length: Math.ceil(totalItems / itemsPerPage) }, (_, index) => index + 1);

  return (
    <div className="flex justify-center mt-8">
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => paginate(number)}
          className={`mx-1 px-3 py-1 rounded ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;