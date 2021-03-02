import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';

const BooksList = ({ books }) => {
  books.map(book => <Book book={book} key={book.BookID} />);

  return (
    <table>
      <tr>
        <th>
          Book ID
        </th>
        <th>
          Book Title
        </th>
        <th>
          Book Category
        </th>
      </tr>
      {books}
    </table>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
});

export default connect(mapStateToProps)(BooksList);
