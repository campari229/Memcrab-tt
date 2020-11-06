const idMaker = () => {
  let id = 0;
  return () => {
    return id++;
  }
}

const id = idMaker()

const createRandomNumber = () => {
  return Math.floor(Math.random() * (900) + 100);
};

export const rowCreator = (columns) => {
  const arr = new Array(columns).fill("#");
  
  const row = arr.map(() => {
    return {
      amount: createRandomNumber(),
      id: id(),
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
  if (array.length) {
    const tempoArr = new Array(array[0].length);
    let index = 0;
    const res = Array.from(tempoArr, () => {
      const sum = array.reduce((acumulator, item) => {
        return acumulator += item[index].amount
      }, 0)

      index++;
      return ({
        amount: Math.round(sum / array.length),
        id: id(),
      })
    })
    return res;
  } else {
    return [];
  }
};

export const findClosest = (array, target, numberOfClosest) => {
  let arr = array.flat()
  arr.sort((a, b) => a.amount - b.amount)
  const targetIndex = arr.indexOf(target)
  const gap = numberOfClosest / 2;
  
  if (targetIndex - gap < 0) {
    return arr.slice(0, numberOfClosest).filter(item => item.id !== target.id)
  } else if (targetIndex + gap > arr.length) {
    return arr.slice((arr.length - 1) - numberOfClosest).filter(item => item.id !== target.id)
  } else if (numberOfClosest % 2 === 0) {
    return arr.slice(targetIndex - gap, targetIndex + gap).filter(item => item.id !== target.id)
  } else {
    const closest = arr.slice(targetIndex - Math.ceil(gap), targetIndex + Math.ceil(gap)).filter(item => item.id !== target.id);
    if (Math.abs(target.amount - closest[0].amount) > Math.abs(target.amount - closest[closest.length - 1].amount)) {
      closest.shift()
      return closest
    } else {
      closest.pop()
      return closest
    }
  }
}
