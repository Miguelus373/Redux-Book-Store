import React from 'react';
import PropTypes from 'prop-types';
import progressBarCircle from '../assets/progressBarCircle.png';

const Book = ({ book, handleRemoveBook }) => {
  const { bookID, title, category } = book;
  return (
    <>
      <div className="row justify-content-between my-3 p-0 w-100 bg-white">
        <div className="justify-content-between align-items-center my-2 p-4 w-50">
          <span>{category}</span>
          <h4>{title}</h4>
          <span>Author</span>
          <br />
          <span className="text-info">Comments</span>
          <button
            className="text-info bg-white border-0 mx-3"
            type="button"
            onClick={() => handleRemoveBook(bookID)}
          >
            Remove
          </button>
          <span className="text-info">Edit</span>
        </div>
        <div className="d-flex flex-row align-items-center justify-content-between mr-3 pr-5">
          <div>
            <img src={progressBarCircle} alt="progressbar" />
          </div>
          <div className="ml-2">
            <div className="h2">64%</div>
            <div><small>Completed</small></div>
          </div>
        </div>
        <div className="d-flex flex-column ml-5 my-2 p-4 pl-5 border-left">
          <div className="mx-2 text-uppercase text-muted">Current chapter</div>
          <div className=" h6 mx-2 mb-2 text-muted">Introduction</div>
          <button type="button" className="btn btn-primary border-0 mr-3 mt-3 ml-1 text-uppercase">
            Update progress
          </button>
        </div>
      </div>
    </>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    bookID: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
