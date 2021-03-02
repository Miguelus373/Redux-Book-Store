import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { REMOVE_BOOK, CHANGE_FILTER } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';

class BooksList extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveBook = this.handleRemoveBook.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleRemoveBook = bookID => {
    const { REMOVE_BOOK } = this.props;
    REMOVE_BOOK(bookID);
  }

  handleFilterChange(filter) {
    const { CHANGE_FILTER } = this.props;
    CHANGE_FILTER(filter);
  }

  bookFilter(filter) {
    const { books } = this.props;
    return books.filter(({ category }) => category === filter);
  }

  render() {
    const { filter } = this.props;
    const books = this.bookFilter(filter);

    return (
      <>
        <CategoryFilter handleFilterChange={this.handleFilterChange} />
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
          {books.map(book => (
            <Book
              book={book}
              key={book.bookID}
              handleRemoveBook={this.handleRemoveBook}
            />
          ))}
        </table>
      </>
    );
  }
}

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  REMOVE_BOOK: PropTypes.func.isRequired,
  CHANGE_FILTER: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({ books: state.bookReducer, filter: state.CategoryFilter });

const mapDispatchToProps = {
  REMOVE_BOOK,
  CHANGE_FILTER,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
