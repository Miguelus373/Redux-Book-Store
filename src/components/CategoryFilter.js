import React from 'react';
import PropTypes from 'prop-types';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const CategoryFilter = ({ handleFilterChange }) => (
  <>
    <span className="mr-3 text-secondary font-weight-bold">Filter by Category</span>
    <select onChange={handleFilterChange} className="border-0 bg-white text-secondary p-2">
      <option value="All">All</option>
      {categories.map(category => (<option key={category}>{category}</option>))}
    </select>
  </>
);

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
