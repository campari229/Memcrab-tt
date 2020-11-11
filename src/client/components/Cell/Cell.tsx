import React, { useMemo, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { increment, reducer, showClosest } from '../../store/store';

import styles from '../Matrix/Matrix.css';

type Props = {
  amount: number;
  id: number;
  isPercentsShown?: boolean;
  isCloser?: boolean;
  i: number;
  rowValue: number;
}

export const Cell: React.FC<Props> = React.memo(({ amount, id, isPercentsShown, isCloser, i, rowValue }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(`cell mount ${amount}`)
  })

  return (
    <td
      onClick={() => dispatch(increment(id, i))}
      onMouseOver={() => {dispatch(showClosest(id))}}
      onMouseOut={() => {dispatch(showClosest(id))}}
      className={isCloser ? styles.cellClosest : styles.cell}
    >
      <p className={styles.text}>
        {isPercentsShown
          ? `${Math.round((amount / rowValue) * 100)}%`
          : amount
        }
      </p>
      <div
        style={
          isPercentsShown
            ? {height: `${Math.round((amount / rowValue) * 100)}%`, backgroundColor: "red", transition: "height 0.5s", position: "absolute", bottom: "0", left: "0", width: "100%"}
            : {height: "0", backgroundColor: "red", transition: "height 0.5s", position: "absolute", bottom: "0", left: "0", width: "100%"}
        }
      />
    </td>
  )
})