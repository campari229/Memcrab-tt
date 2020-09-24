import React, { useEffect } from 'react';
import './App.scss';

import { useDispatch, useSelector } from 'react-redux';
import { setCells, getCells, getTableFooter, addRow, removeRow } from './store/store';
import { cellsCreator } from './lib/CellsCreator';
import { rowCreator } from './lib/CellsCreator';

function App() {
  const dispatch = useDispatch();
  const cells = useSelector(getCells);
  const tableFooter = useSelector(getTableFooter);

  useEffect(() => {
    dispatch(setCells(cellsCreator(3, 4)));
  }, [dispatch])

  return (
    <div className="App">
      <table>
        <tbody>
          {cells.map((row, i)=> (
            <tr className="table__row" key={i}>
              <td><button onClick={() => dispatch(removeRow(i))}>remove row</button></td>
              {row.map(cell => (
                <td key={cell.id}>
                  {cell.amount}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            {tableFooter.map(cell => (
              <td key={cell.id}>
                {cell.amount}
              </td>
            ))}
            <td><button onClick={() => dispatch(addRow(rowCreator(cells[0].length - 1)))}>add row</button></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default App;
