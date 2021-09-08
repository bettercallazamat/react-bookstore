import React from 'react';
import ReactDOM from 'react-dom';
import './styles/resetstyle.css';
import './styles/index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './reducers/index';

const bookReducer = [
  {
    id: Math.floor(Math.random() * 100),
    title: 'Book Title #1',
    category: 'Kids',
  },

  {
    id: Math.floor(Math.random() * 100),
    title: 'Book Title #2',
    category: 'Learning',
  },

  {
    id: Math.floor(Math.random() * 100),
    title: 'Book Title #3',
    category: 'Sci-Fi',
  },
];

const initialState = { bookReducer };
const store = createStore(rootReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
