import {createStore, AnyAction } from 'redux';
import { Cell } from '../Interfaces';
import { getAverageValues } from '../lib/CellsCreator';

const SET_CELLS = 'SET_CELLS';
const ADD_ROW = 'ADD_ROW';
const REMOVE_ROW = 'REMOVE_ROW';

export const setCells = (cells: Cell[][]) => ({
  type: SET_CELLS,
  cells,
});
export const addRow = (row: Cell[]) => ({
  type: ADD_ROW,
  row,
})
export const removeRow = (number: number) => ({
  type: REMOVE_ROW,
  number,
})

export const getCells = (store: InitialState) => store.cells;
export const getTableFooter = (store: InitialState) => store.tableFooter;


type InitialState = {
  cells: Cell[][];
  tableFooter: Cell[];
};

const initialState = {
  cells: [],
  tableFooter: [],
};



const reducer = (store: InitialState = initialState, action: AnyAction ) => {
  switch (action.type) {
    case 'SET_CELLS':
      console.log(action.cells)
      console.log(getAverageValues(action.cells))
      return {
        ...store,
        cells: action.cells,
        tableFooter: getAverageValues(action.cells),
      };

    case 'ADD_ROW':
      console.log([...store.cells, action.row])
      return {
        ...store,
        cells: [
          ...store.cells,
          action.row,
        ],
        tableFooter: getAverageValues([...store.cells, action.row])
      };

    case 'REMOVE_ROW':
      const filteredCells = store.cells.filter((row, index) => index !== action.number)
      return {
        ...store,
        cells: filteredCells,
        tableFooter: getAverageValues(filteredCells),
      }

    default:
      return store;
  }
};

const store = createStore(reducer);

export default store;
