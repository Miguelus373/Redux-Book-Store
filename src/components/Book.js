import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, handleRemoveBook }) => {
  const { bookID, title, category } = book;
  return (
    <tr>
      <td>{bookID}</td>
      <td>{title}</td>
      <td>{category}</td>
      <td>
        <button
          type="button"
          onClick={() => handleRemoveBook(bookID)}
        >
          Remove
        </button>
      </td>
    </tr>
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
