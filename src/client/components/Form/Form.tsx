import React, { useState, SyntheticEvent } from 'react';

import styles from './Form.css';

export const Form = () => {
  const [rowsInputValue, setRowsInputValue] = useState('');
  const [rowsIsValid, setRowsIsValid] = useState(true);
  const [columnsInputValue, setColumnsInputValue] = useState('');
  const [columnsIsValid, setColumnsIsValid] = useState(true);
  const [closestInputValue, setClosestInputValue] = useState('');
  const [closestIsValid, setClosestIsValid] = useState(true);


  const rowsAndColumnsValidation = (inputValue: string) => {
    if (inputValue && typeof Number(inputValue) === 'number') {
      return true;
    } else {
      return false;
    }
  }

  const closestValidation = (value: string) => {
    if (rowsInputValue && columnsInputValue) {
      if (Number(value) <= Number(rowsInputValue) * Number(columnsInputValue)) {
        return true;
      } else {
        return false;
      }
    }
  }

  const makeMatrix = (e: SyntheticEvent) => {
    e.preventDefault()

    if (rowsAndColumnsValidation(rowsInputValue) && rowsAndColumnsValidation(columnsInputValue)) {
      if (closestValidation(closestInputValue)) {
        location.assign(`http://localhost:3000/columns=${columnsInputValue}/rows=${rowsInputValue}/closest=${closestInputValue}`);
      } else {
        setClosestIsValid(false);
      }
    } else {
      setRowsIsValid(false);
      setColumnsIsValid(false);
    }
  }

   return (
     <form className={styles.form} onSubmit={makeMatrix} >
       <h1>Matrix Maker</h1>
       <div>
          <label>
            Number of rows
            <input
              type="text"
              name="rows"
              className={styles.input}
              onChange={(e) => setRowsInputValue(e.target.value)}
            />
          </label>
          <p className={styles.error} style={rowsIsValid ? { opacity: '0' } : {opacity: '1'}}>
            Enter a number of rows
          </p>
       </div>
       <div>
          <label>
            Number of columns 
            <input
              type="text"
              name="columns"
              className={styles.input}
              onChange={(e) => setColumnsInputValue(e.target.value)}
            />
          </label>
          <p className={styles.error} style={columnsIsValid ? { opacity: '0' } : {opacity: '1'}}>
            Enter a number of columns
          </p>
       </div>
       <div>
          <label>
          Number of closest cells to shown
            <input
              type="text"
              id="closest"
              name="closest"
              className={styles.input}
              onChange={(e) => setClosestInputValue(e.target.value)}
            />
          </label>
          <p className={styles.error} style={closestIsValid ? { opacity: '0' } : {opacity: '1'}}>
            Enter a number of closest cells to shown (min: 1, max: columns * rows)
          </p>
       </div>
       <button className={styles.button}>Make a matrix</button>
     </form>
   )
}
 