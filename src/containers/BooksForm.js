import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit() {
    this.setState(prev => {
      const { CREATE_BOOK } = this.props;
      CREATE_BOOK({
        bookID: Math.floor(Math.random() * 100),
        title: prev.title,
        category: prev.category,
      });

      return ({
        title: '',
        category: '',
      });
    });
  }

  render() {
    const { title, category } = this.state;
    return (
      <div className="books-form">
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={title} name="title" type="text" placeholder="Book title" />
          <select onChange={this.handleChange} value={category} name="category">
            {categories.map(category => (<option key={category}>{category}</option>))}
          </select>
          <button type="button" onClick={this.handleSubmit}>
            Add Book
          </button>
        </form>
      </div>
    );
  }
}

BooksForms.propTypes = {
  CREATE_BOOK: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  CREATE_BOOK,
};

export default connect(null, mapDispatchToProps)(BooksForms);
