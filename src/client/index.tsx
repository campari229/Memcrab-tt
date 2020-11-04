import React from 'react';
import ReactDOM from "react-dom"
import App from './App';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import { reducer } from './store/store.js';
import { createStore } from 'redux';

declare global {
  interface Window { __PRELOADED_STATE__: any; }
}

window.__PRELOADED_STATE__ = window.__PRELOADED_STATE__ || {};

const preloadedState = window.__PRELOADED_STATE__

delete window.__PRELOADED_STATE__

const store = createStore(reducer, preloadedState)


ReactDOM.hydrate(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('app')
)
