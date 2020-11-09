import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Matrix } from './components/Matrix/Matrix.jsx';
import { Form } from './components/Form/Form.jsx';



const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={Form} />
      <Route path="/" render={(props) => <Matrix {...props} />} />
    </Switch>
  )
}

export default App;