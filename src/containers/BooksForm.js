import React from 'react';
import { connect } from 'react-redux';
import { CREATE_BOOK } from '../actions/index';

const categories = ['Category', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

class BooksForms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { title, category } = this.state;
    return (
      <div className="books-form">
        <input onChange={this.handleChange} value={title} name="title" type="text" placeholder="Book title" />
        <select onChange={this.handleChange} value={category} name="category">
          {categories.map(category => (<option key={category}>{category}</option>))}
        </select>
        <button type="submit">
          Add Book
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addBook: book => {
    dispatch(CREATE_BOOK(book));
  },
});

export default connect(null, mapDispatchToProps)(BooksForms);
