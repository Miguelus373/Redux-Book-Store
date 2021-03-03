import React from 'react';
import { Navbar } from 'react-bootstrap';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

function App() {
  return (
    <div className="bg-light">
      <Navbar className="bg-white">
        <div className="d-flex flex-row justify-content-between align-items-center">
          <h1 className="text-primary mx-5">Bookstore CMS</h1>
          <span className="mx-3 text-uppercase">Books</span>
          <span className="mx-3 text-uppercase text-muted">Categories</span>
        </div>
      </Navbar>
      <div className="container">
        <BooksList />
        <BooksForm />
      </div>
    </div>
  );
}

export default App;
