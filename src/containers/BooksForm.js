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
      <div className="wrapper-all px-5 my-4">
        <div className="title-wrapper">
          <h4 className="text-uppercase text-secondary font-weight-bold">Add new book</h4>
        </div>
        <div className="books-form container-fluid justify-content-between align-items-center my-1 py-3">
          <form onSubmit={this.handleSubmit} className="row">
            <input onChange={this.handleChange} value={title} name="title" type="text" placeholder="Book title" className="col-6 py-1 text-muted border-0" />
            <select onChange={this.handleChange} value={category} name="category" className="col-3 py-2 mx-4 border-0 bg-white text-secondary">
              {categories.map(category => (<option key={category}>{category}</option>))}
            </select>
            <button type="button" className="btn btn-large btn-primary col-2 px-2 text-uppercase" onClick={this.handleSubmit}>
              Add Book
            </button>
          </form>
        </div>
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
