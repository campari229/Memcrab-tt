import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './client/App';
import { Provider } from 'react-redux';
import { reducer } from './client/store/store';
import { createStore } from 'redux';
import { StaticRouter } from "react-router-dom"
import { State } from './client/store/store'
import { getAverageValues, cellsCreator } from './client/lib/lib';

const port = 3000;
const server = express();

server.use(express.static('dist'));

const htmlMaker = (body: string, state: State) => {
  return  `
  <!DOCTYPE html>
  <html>
    <head>
      <title>React SSR App</title>
      <script defer src="/bundle.js"></script>
      <link rel="stylesheet" type="text/css" href="/styles.css"></link> 
    </head>
    <body style="margin:0">
      <div id="app">${body}</div>
      <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(state).replace(
            /</g,
            '\\u003c'
          )}
      </script>
    </body>
  </html>
  `
}

server.get('*', (req, res) => {
  let preloadedState: State = {
    cells: [],
    numberOfClosest: 0,
    tableFooter: []
  }
  const params = req.path.match(/(?<=)\d+/gi)

  if (params && params.length === 3) {
    const data = req.path.match(/(?<=)\d+/gi);
    if (data) {
      const cells = cellsCreator(Number(data[1]), Number(data[0]))

      preloadedState = {
        cells,
        numberOfClosest: Number(data[2]),
        tableFooter: getAverageValues(cells)
      }
    }
  }

  const store = createStore(reducer, preloadedState);

  const context = {};

  const finalState = store.getState();

  let app = renderToString(
    <StaticRouter location={req.path} context={context} >
      <Provider store={store}>
        <App />
      </Provider>
    </StaticRouter>
  )

  res.send(
    htmlMaker(app, finalState)
  )
})

server.listen(port);
console.log(`Serving at http://localhost:${port}`);
