import React from 'react';
import ReactDOM from "react-dom"
import App from './App';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import { reducer } from './store/store';
import { createStore } from 'redux';
import { State } from './store/store';

declare global {
  interface Window {
    preloadedState: State;
  }
}

const preloadedState: State = (window as any).window.__PRELOADED_STATE__

const store = createStore(reducer, preloadedState)


ReactDOM.hydrate(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('app')
)
