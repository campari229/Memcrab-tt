import { createRandomNumber, rowCreator, cellsCreator, getAverageValues, findClosest } from '../client/lib/lib';

test('createRandomNumber should create randon three-digit number', () => {
  expect(typeof createRandomNumber()).toBe('number');
  expect(createRandomNumber().toString().length).toBe(3)
})

test('rowCreator should create array of objects with correct length', () => {
  expect(typeof rowCreator(4)[0]).toBe('object')
  expect(rowCreator(4).length).toBe(4);
  expect(rowCreator(7).length).toBe(7)
})

test('rowCreator should create array of correct objects', () => {
  const cell = rowCreator(3)[0]
  expect(cell).toEqual(
    expect.objectContaining({
      amount: expect.any(Number),
      id: expect.any(Number),
      isPercentsShown: expect.any(Boolean),
      isCloser: expect.any(Boolean)
    })
  )
  expect(cell.isPercentsShown || cell.isCloser).toBe(false)
})

test('cellsCreator should create correct array of rows', () => {
  const array = cellsCreator(4, 3);
  const row = array[0]
  expect(typeof row).toBe('object');
  expect(row.length).toBe(3)
  expect(array.length).toBe(4)
})

test('getAverageValues should return array of average values for each column', () => {
  const cells = cellsCreator(3, 3);
  const avarageValues = getAverageValues(cells);

  expect(typeof avarageValues).toBe('object');
  expect(avarageValues.length).toBe(cells[0].length);
  expect(avarageValues[0].amount).toBe(
    Math.round((cells[0][0].amount + cells[1][0].amount + cells[2][0].amount) / 3)
  )
})

test('getAverageValues should return empty array if entered array is empty', () => {
  expect(getAverageValues([])).toEqual([])
})

test('findClosest should return array of correct object', () => {
  const cells = cellsCreator(3, 3);
  const closest = findClosest(cells, cells[0][0], 5);

  expect(closest[0]).toEqual(
    expect.objectContaining({
      amount: expect.any(Number),
      id: expect.any(Number),
      isPercentsShown: expect.any(Boolean),
      isCloser: expect.any(Boolean)
    })
  )
})

test('findClosest should return correct quantity of closest items', () => {
  const cells = cellsCreator(3, 3);
  const closest = findClosest(cells, cells[0][0], 5);

  expect(closest.length).toBe(5)
})

test('findClosest should return closest items', () => {
  const cells = [
    [{ amount: 432, id: 1 }, { amount: 123, id: 2 }, { amount: 534, id: 3 }],
    [{ amount: 228, id: 6 }, { amount: 322, id: 5 }, { amount: 152, id: 4 }],
    [{ amount: 122, id: 7 }, { amount: 899, id: 8 }, { amount: 356, id: 9 }]
  ]

  expect(findClosest(cells, cells[0][1], 1)).toEqual([
    { amount: 122, id: 7 }
  ])
  expect(findClosest(cells, cells[2][1], 3)).toEqual([
    { amount: 356, id: 9 },
    { amount: 432, id: 1 },
    { amount: 534, id: 3 }
  ])
  expect(findClosest(cells, cells[0][1], 3)).toEqual([
    { amount: 122, id: 7 },
    { amount: 152, id: 4 },
    { amount: 228, id: 6 }
  ])
  expect(findClosest(cells, cells[1][1], 2)).toEqual([
    { amount: 228, id: 6 },
    { amount: 356, id: 9 }
  ])
  expect(findClosest(cells, cells[1][1], 3)).toEqual([
    { amount: 228,id: 6 },
    { amount: 356,id: 9 },
    { amount: 432,id: 1 }
  ])
})

