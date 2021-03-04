import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App';
import rootReducer from './reducers/index';
import 'bootstrap/dist/css/bootstrap.min.css';

const defaultBook = [
  {
    bookID: Math.floor(Math.random() * 150),
    title: 'Ethical Hacking',
    category: 'Learning',
  },
  {
    bookID: Math.floor(Math.random() * 50),
    title: 'Da Vinci Code',
    category: 'Action',
  },
  {
    bookID: Math.floor(Math.random() * 100),
    title: 'Harry Potter',
    category: 'Sci-Fi',
  },
];

const store = createStore(rootReducer, { bookReducer: defaultBook });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
