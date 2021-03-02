import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { REMOVE_BOOK } from '../actions/index';

class BooksList extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveBook = this.handleRemoveBook.bind(this);
  }

  handleRemoveBook = bookID => {
    const { REMOVE_BOOK } = this.props;
    REMOVE_BOOK(bookID);
  }

  render() {
    const { books } = this.props;

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
        {books.map(book => (
          <Book
            book={book}
            key={book.bookID}
            handleRemoveBook={this.handleRemoveBook}
          />
        ))}
      </table>
    );
  }
}

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  REMOVE_BOOK: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ books: state.bookReducer });

const mapDispatchToProps = {
  REMOVE_BOOK,
};
// const mapDispatchToProps = dispatch => ({
//   REMOVE_BOOK: bookID => {
//     dispatch(REMOVE_BOOK(bookID));
//   },
// });

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
