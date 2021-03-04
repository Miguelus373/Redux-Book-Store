import React from 'react';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import Navbar from './Navbar';

function App() {
  return (
    <div className="bg-light">
      <Navbar />
      <div className="container-fluid px-5 py-3">
        <BooksList />
        <BooksForm />
      </div>
    </div>
  );
}

export default App;
