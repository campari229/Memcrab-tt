import { Cell } from '../Interfaces';

let id = 1;

const createRandomNumber = () => {
  return Math.floor(Math.random() * (900) + 100);
};

export const rowCreator = (columns: number): Cell[] => {
  const row = []
  let sum = 0;
  for (let i = 0; i < columns; i++) {
    const amount = createRandomNumber()
    sum += amount;
    row.push({
      amount,
      id: id,
      isPercentsShown: false,
      isCloser: false,
    });
    id++;

    if (row.length === columns) {
      row.push({
        amount: sum,
        id: id,
      });
      id++;
    };
  }

  return row;
}



export const cellsCreator = (rows: number, columns: number): Cell[][] => {
  const cells = [];

  for (let i = 0; i < rows; i++) {
    cells.push(rowCreator(columns))
  }

  return cells;
}

export const getAverageValues = (array: Cell[][]): Cell[] => {
  let row = [];
  for (let i = 0; i < array[0].length - 1; i++) {
    let sum = 0;
    for (let j = 0; j < array.length; j++) {
      sum += array[j][i].amount
    }
    row.push({
      amount: Math.round(sum / array.length),
      id
    });

    id++;
  }
  return row
};
