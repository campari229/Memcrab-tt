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
    __PRELOADED_STATE__?:State;
  }
}

const preloadedState: State | undefined = window.__PRELOADED_STATE__

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
