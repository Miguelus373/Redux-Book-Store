import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, handleRemoveBook }) => {
  const { bookID, title, category } = book;
  return (
    <>
      <div className="bg-white justify-content-between align-items-center my-4 p-4">
        <span>{category}</span>
        <h4>{title}</h4>
        <span>
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
