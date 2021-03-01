import React from 'react';

const Book = book => {
  const { BookID, title, category } = book;
  return (
    <tr>
      <td>{BookID}</td>
      <td>{title}</td>
      <td>{category}</td>
    </tr>
  );
};

export default Book;
