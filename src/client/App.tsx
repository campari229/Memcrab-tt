import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Matrix } from './components/Matrix/Matrix';
import { Form } from './components/Form/Form';



const App: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Form} />
      <Route path="/" render={(props) => <Matrix />} />
    </Switch>
  )
}

export default App;