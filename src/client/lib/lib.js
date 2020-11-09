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
  return Array.from({length: columns}, () => {
    return {
      amount: createRandomNumber(),
      id: id(),
      isPercentsShown: false,
      isCloser: false
    };
  })
}

export const cellsCreator = (rows, columns) => {
  return Array.from({length: rows}, () => rowCreator(columns))
}

export const getAverageValues = (array) => {
  if (array.length) {
    return array.reduce((acumulator, row, rowIndex) => {
      const rowSum = row.reduce((acumulator, cell, cellIndex) => {
        return acumulator += array[cellIndex][rowIndex].amount;
      }, 0)

      return [
        ...acumulator,
        {
          amount: Math.round(rowSum / row.length),
          id: id(),
        }
      ]
    }, [])
  } else {
    return [];
  }
};

export const findClosest = (array, targetId, numberOfClosest) => {
  const arr = array.flat()
  arr.sort((a, b) => a.amount - b.amount)
  const target = arr.find(item => item.id === targetId)
  const targetIndex = arr.indexOf(target)
  const arrayWithoutTarget = arr.filter(item => item.id !== target.id)
  const gap = numberOfClosest / 2;
  
  if (targetIndex - gap < 0) {
    return arrayWithoutTarget.slice(0, numberOfClosest)
  } else if (targetIndex + gap > arr.length) {
    return arrayWithoutTarget.slice((arr.length - 1) - numberOfClosest)
  } else if (numberOfClosest % 2 === 0) {
    return arrayWithoutTarget.slice(targetIndex - gap, targetIndex + gap)
  } else {
    const closest = arrayWithoutTarget.slice(targetIndex - Math.ceil(gap), targetIndex + Math.ceil(gap))
    if (Math.abs(target.amount - closest[0].amount) > Math.abs(target.amount - closest[closest.length - 1].amount)) {
      closest.shift()
      return closest
    } else {
      closest.pop()
      return closest
    }
  }
}
