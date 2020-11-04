
let id = 1;

const createRandomNumber = () => {
  return Math.floor(Math.random() * (900) + 100);
};

export const rowCreator = (columns) => {
  const row = []
  for (let i = 0; i < columns; i++) {
    const amount = createRandomNumber()
    row.push({
      amount,
      id: id,
      isPercentsShown: false,
      isCloser: false,
    });
    id++;
  }

  return row;
}



export const cellsCreator = (rows, columns) => {
  const cells = [];

  for (let i = 0; i < rows; i++) {
    cells.push(rowCreator(columns))
  }

  return cells;
}

export const getAverageValues = (array) => {
  if (array.length) {
    let row = [];
    for (let i = 0; i < array[0].length; i++) {
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
  } else {
    return [];
  }
};

export const findClosest = (array, target, numberOfClosest) => {
  const arr = array.flat()
  arr.sort((a, b) => a.amount - b.amount)
  const targetIndex = arr.indexOf(target)
  const gap = numberOfClosest / 2;
  arr.filter(item => item.id !== target.id)
  
  if (targetIndex - gap < 0) {
    return [...arr].splice(0, numberOfClosest)
  } else if (targetIndex + gap > arr.length) {
    return [...arr].splice(-(arr.length - 1), numberOfClosest)
  } else if (numberOfClosest % 2 === 0) {
    return [...arr].splice(targetIndex - gap, numberOfClosest)
  } else {
    const closest = [...arr].splice(targetIndex - Math.ceil(gap), numberOfClosest + 1);
    if (Math.abs(target.amount - closest[0].amount) > Math.abs(target.amount - closest[closest.length - 1])) {
      closest.shift()
      return closest
    } else {
      closest.pop()
      return closest
    }
  }
}
