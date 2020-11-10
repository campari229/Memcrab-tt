import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCells,
  getTableFooter,
  addRow,
  removeRow,
  increment,
  percentsToggle,
  showClosest
} from '../../store/store';
import { rowCreator } from '../../lib/lib';

import './Matrix.scss';
import { Row } from '../Row/Row';

export const Matrix = () => {
  const dispatch = useDispatch();
  const cells = useSelector(getCells);
  const tableFooter = useSelector(getTableFooter);

  if (cells) {
    return (
      <table className="table">
        <tbody className="table__body">
          {cells.map((row, i)=> (
            <tr className="table__row" key={i}>
              <Row row={row} i={i} />
            </tr>
          ))}
        </tbody>
        <tfoot className="table__footer">
          <tr className ="table__row-footer">
            {tableFooter.map((cell) => (
              <td key={cell.id} className="table__cell-avarange">
                {cell.amount}
              </td>
            ))}
            <td className="table__button-wrapper">
              <button className="table__button-new" onClick={() => dispatch(addRow(rowCreator(cells[0].length)))}>add row</button>
            </td>
          </tr>
        </tfoot>
      </table>
    )
  } else {
    return <h2>oops</h2>
  }
}

