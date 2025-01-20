import React from "react";
import "../styles/Pagination.css";
const Pagination = ({ currentPage, setPage }) => {
  const handlePrev = () => {
    if (currentPage > 1) setPage(currentPage - 1);
  };

  const handleNext = () => {
    setPage(currentPage + 1);
  };

  return (
    <div className="pagination">
      <button onClick={handlePrev} disabled={currentPage === 1}>
        Previous
      </button>
      <span>Page {currentPage}</span>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Pagination;
