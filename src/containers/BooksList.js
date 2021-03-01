import React from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';

const BooksList = books => (
  <table>
    { books.map(book => <Book book={book} key={book.BookID} />)}
  </table>
);

const mapStateToProps = state => ({
  books: state.books,
});

export default connect(mapStateToProps)(BooksList);
