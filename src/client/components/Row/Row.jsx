import React, { useEffect, useMemo } from 'react';
import { Cell } from '../Cell/Cell.jsx';
import { useDispatch } from 'react-redux';
import { removeRow, percentsToggle } from '../../store/store';

export const Row = ({ row, i }) => {
  const dispatch = useDispatch();
  const rowValue = row.reduce((acumulator, cell) => acumulator + cell.amount, 0)
  useEffect(() => {
    console.log(`row ${i}`)
  })

  return (
    <>
      <td className="table__button-wrapper">
        <button className="table__button-remove" onClick={() => dispatch(removeRow(i))}>Remove row</button>
      </td>
      {row.map(cell => (
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
        className="table__cell"
        onMouseOver={() => {dispatch(percentsToggle(i))}}
        onMouseOut={() => dispatch(percentsToggle(i))}
      >
        {row.reduce((acumulator, cell) => acumulator + cell.amount, 0)}
      </td>
    </>
  )
}
