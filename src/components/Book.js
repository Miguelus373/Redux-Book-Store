import React from 'react';
import PropTypes from 'prop-types';

const Book = book => {
  const { bookID, title, category } = book.book;
  return (
    <tr>
      <td>{bookID}</td>
      <td>{title}</td>
      <td>{category}</td>
    </tr>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    bookID: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
