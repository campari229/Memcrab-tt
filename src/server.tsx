import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './client/App';
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
          window.__PRELOADED_STATE__ = ${JSON.stringify(state)}
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
    const cells = cellsCreator(Number(params[1]), Number(params[0]))

      preloadedState = {
        cells,
        numberOfClosest: Number(params[2]),
        tableFooter: getAverageValues(cells)
      }
  }

  const AppContext = React.createContext(preloadedState);

  const context = {};


  let app = renderToString(
    <StaticRouter location={req.path} context={context} >
      <AppContext.Provider value={preloadedState}>
        <App />
      </AppContext.Provider>
    </StaticRouter>
  )

  res.send(
    htmlMaker(app, preloadedState)
  )
})

server.listen(port);
console.log(`Serving at http://localhost:${port}`);
