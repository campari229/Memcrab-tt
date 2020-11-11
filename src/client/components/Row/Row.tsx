import React, { useEffect, useMemo } from 'react';
import { Cell } from '../Cell/Cell';
import { useDispatch } from 'react-redux';
import { removeRow, percentsToggle } from '../../store/store';
import { CellInterface } from '../../../Interfaces';

type Props = {
  row: CellInterface[];
  i: number;
}

import styles from '../Matrix/Matrix.css';


export const Row: React.FC<Props> = ({ row, i }) => {
  const dispatch = useDispatch();
  const rowValue = row.reduce((acumulator, cell) => acumulator + cell.amount, 0)
  useEffect(() => {
    console.log(`row ${i}`)
  })

  return (
    <>
      <td className={styles.buttonWrapper}>
        <button className={styles.buttonRemove} onClick={() => dispatch(removeRow(i))}>Remove row</button>
      </td>
      {row.map((cell) => (
        <Cell
          amount={cell.amount}
          id={cell.id}
          isCloser={cell.isCloser}
          isPercentsShown={cell.isPercentsShown}
          i={i}
          key={cell.id}
          rowValue={rowValue}
        />
      ))}
      <td
        className={styles.cell}
        onMouseOver={() => {dispatch(percentsToggle(i))}}
        onMouseOut={() => dispatch(percentsToggle(i))}
      >
        {row.reduce((acumulator, cell) => acumulator + cell.amount, 0)}
      </td>
    </>
  )
}
