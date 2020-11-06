import { Cell } from '../../Interfaces';

let id = 1;

export const createRandomNumber = () => {
  return Math.floor(Math.random() * (900) + 100);
};

export const rowCreator = (columns: number) => {
  const arr = new Array(columns).fill("#");
  
  const row = arr.map(() => {
    return {
      amount: createRandomNumber(),
      id: id++,
      isPercentsShown: false,
      isCloser: false
    };
  })

  return row;
}

export const cellsCreator = (rows: number, columns: number) => {
  const arr = new Array(rows).fill("#");

  const cells = arr.map(() => rowCreator(columns))

  return cells;
}

export const getAverageValues = (array: Cell[][]) => {
  if (array.length) {
    const tempoArr = new Array(array[0].length).fill(0);
    const res = tempoArr.map((cell, i) => {
      let sum = 0;
      array.forEach(item => {
        sum += item[i].amount
      })
      return ({
        amount: Math.round(sum / array.length),
        id: id++
      })
    })
    return res;
  } else {
    return [];
  }
};

export const findClosest = (array: Cell[][], target: Cell, numberOfClosest: number) => {
  let arr = array.flat()
  arr.sort((a, b) => a.amount - b.amount)
  const targetIndex = arr.indexOf(target)
  const gap = numberOfClosest / 2;
  arr = arr.filter(item => item.id !== target.id)
  
  if (targetIndex - gap < 0) {
    return [...arr].splice(0, numberOfClosest)
  } else if (targetIndex + gap > arr.length) {
    return [...arr].splice((arr.length) - numberOfClosest, numberOfClosest)
  } else if (numberOfClosest % 2 === 0) {
    return [...arr].splice(targetIndex - gap, numberOfClosest)
  } else {
    const closest = [...arr].splice(targetIndex - Math.ceil(gap), numberOfClosest + 1);
    if (Math.abs(target.amount - closest[0].amount) > Math.abs(target.amount - closest[closest.length - 1].amount)) {
      closest.shift()
      return closest
    } else {
      closest.pop()
      return closest
    }
  }
}
