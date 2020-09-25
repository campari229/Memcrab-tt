import React from 'react';
import { useSelector } from 'react-redux';
import { getCells } from './store/store';
import './App.scss';

import { Matrix } from './components/Matrix/Matrix';
import { Form } from './components/Form/Form';

function App() {
  const cells = useSelector(getCells);

  return (
    <div className="App">
      <Form />
      {
        cells.length
          ? <Matrix />
          : <></>
      }
    </div>
  );
}

export default App;
