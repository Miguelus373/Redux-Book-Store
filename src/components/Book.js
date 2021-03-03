import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, handleRemoveBook }) => {
  const { bookID, title, category } = book;
  return (
    <>
      <div className="row justify-content-between my-2 p-2 w-100 bg-white">
        <div className="justify-content-between align-items-center my-2 p-4 w-50">
          <span>{category}</span>
          <h4>{title}</h4>
          <span className="hidden">
            ID:
            {' '}
            {bookID}
          </span>
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
        <div className="d-flex flex-row justify-content-between my-2 p-4 border-right">
          <div>image</div>
          <div className="ml-2">
            <div className="h2">64%</div>
            <div><small>Completed</small></div>
          </div>
        </div>
        <div className="d-flex flex-column my-2 p-4">
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
