
let id = 1;

const createRandomNumber = () => {
  return Math.floor(Math.random() * (900) + 100);
};

export const rowCreator = (columns) => {
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

export const cellsCreator = (rows, columns) => {
  const arr = new Array(rows).fill("#");

  const cells = arr.map(() => rowCreator(columns))

  return cells;
}

export const getAverageValues = (array) => {
  console.log(array)
  if (array.length) {
    let res = array.reduce((acumulator, row, i) => {
      let avarageValue = 0;
      row.forEach((cell, index) => {
        avarageValue += array[index][i].amount;
      })

      return [
        ...acumulator,
        {
          amount: Math.round(avarageValue / array.length),
          id: id++
        }
      ]
    }, [])

    return res;
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
