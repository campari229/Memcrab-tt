import React from 'react';
import ReactDOM from "react-dom"
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { State, AppContext } from './store/store';

declare global {
  interface Window {
    __PRELOADED_STATE__?:State;
  }
}

let initialState: State = {
  cells: [],
  tableFooter: [],
  numberOfClosest: 0,
};

if (window.__PRELOADED_STATE__) {
  initialState = window.__PRELOADED_STATE__

  delete window.__PRELOADED_STATE__
}

ReactDOM.hydrate(
  <BrowserRouter>
    <AppContext.Provider value={initialState}>
      <App />
    </AppContext.Provider>
  </BrowserRouter>,
  document.getElementById('app')
)
