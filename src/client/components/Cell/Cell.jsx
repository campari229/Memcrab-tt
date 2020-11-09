import React, { useMemo, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { increment, showClosest } from '../../store/store';

export const Cell = React.memo(({ amount, id, isPercentsShown, isCloser, i, rowValue }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(`cell mount ${amount}`)
  })

  return (
    <td
      onClick={() => dispatch(increment(id, i))}
      onMouseOver={() => {dispatch(showClosest(id))}}
      onMouseOut={() => {dispatch(showClosest(id))}}
      className={isCloser ? 'table__cell table__cell-closest' : 'table__cell'}
    >
      <p className="table__text">
        {isPercentsShown
          ? `${Math.round((amount / rowValue) * 100)}%`
          : amount
        }
      </p>
      <div
        className="table__percents"
        style={
          isPercentsShown
            ? {height: `${Math.round((amount / rowValue) * 100)}%`, backgroundColor: "red"}
            : {height: "0"}
        }
      />
    </td>
  )
})