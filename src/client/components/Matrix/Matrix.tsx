import React, { useContext, useReducer } from 'react';
import {
  addRow,
  reducer,
} from '../../store/store';
import { rowCreator } from '../../lib/lib';

import styles from './Matrix.css';
import { Row } from '../Row/Row';

import { AppContext } from '../../../client/store/store';

export const Matrix = () => {
  const context = useContext(AppContext)
  const [state, dispatch] = useReducer(reducer, context)
  const cells = state.cells;
  const tableFooter = state.tableFooter;

  if (cells && tableFooter) {
    return (
      <table className={styles.table}>
        <tbody className={styles.body}>
          {cells.map((row, i)=> (
            <tr className={styles.row} key={i}>
              <Row row={row} i={i} dispatch={dispatch} />
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className={styles.rowFooter}>
            {tableFooter.map((cell) => (
              <td key={cell.id} className={styles.cellAvarange}>
                {cell.amount}
              </td>
            ))}
            <td className={styles.buttonWrapper}>
              <button className={styles.buttonNew} onClick={() => dispatch(addRow(rowCreator(cells[0].length)))}>add row</button>
            </td>
          </tr>
        </tfoot>
      </table>
    )
  } else {
    return <h2>oops</h2>
  }
}

