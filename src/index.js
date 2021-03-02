import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App';
import rootReducer from './reducers/index';

const defaultBook = [
  {
    BookID: 1,
    title: 'Da Vinci Code',
    category: 'Actions',
  },
  {
    BookID: 2,
    title: 'Harry Potter',
    category: 'Sci-fi',
  },
];

const store = createStore(rootReducer, { books: defaultBook });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
