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

  handleFilterChange(e) {
    const { CHANGE_FILTER } = this.props;
    CHANGE_FILTER(e.target.value);
  }

  bookFilter(filter) {
    const { books } = this.props;
    if (filter === 'All') {
      return books;
    }
    return books.filter(({ category }) => category === filter);
  }

  render() {
    const { filter } = this.props;
    const books = this.bookFilter(filter);

    return (
      <div className="px-5 py-3">
        <CategoryFilter handleFilterChange={this.handleFilterChange} />
        {books.map(book => (
          <Book
            book={book}
            key={book.bookID}
            handleRemoveBook={this.handleRemoveBook}
          />
        ))}
      </div>
    );
  }
}

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  REMOVE_BOOK: PropTypes.func.isRequired,
  CHANGE_FILTER: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({ books: state.bookReducer, filter: state.filterReducer });

const mapDispatchToProps = {
  REMOVE_BOOK,
  CHANGE_FILTER,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
