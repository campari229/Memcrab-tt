import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCells,
  getTableFooter,
  addRow,
} from '../../store/store';
import { rowCreator } from '../../lib/lib';

import styles from './Matrix.css';
import { Row } from '../Row/Row';

export const Matrix = () => {
  const dispatch = useDispatch();
  const cells = useSelector(getCells);
  const tableFooter = useSelector(getTableFooter);

  if (cells) {
    return (
      <table className={styles.table}>
        <tbody className={styles.body}>
          {cells.map((row, i)=> (
            <tr className={styles.row} key={i}>
              <Row row={row} i={i} />
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
              <button className={styles.buttonRemove} onClick={() => dispatch(addRow(rowCreator(cells[0].length)))}>add row</button>
            </td>
          </tr>
        </tfoot>
      </table>
    )
  } else {
    return <h2>oops</h2>
  }
}

