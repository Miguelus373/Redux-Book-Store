import React from 'react';

const category = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const BooksForms = () => (
  <>
    <input />
    <select>
      {category.map(cat => (<option key={cat}>{cat}</option>))}
    </select>
    <button type="submit">
      Add Book
    </button>
  </>
);

export default BooksForms;
