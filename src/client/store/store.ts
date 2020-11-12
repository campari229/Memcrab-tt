import React from 'react';
import { getAverageValues, findClosest } from '../lib/lib';
import { CellInterface } from '../../Interfaces';
import { actions, ActionType } from './actions';

export const setCells = (cells: CellInterface[][]) => ({
  type: actions.SET_CELLS,
  cells,
});
export const addRow = (row: CellInterface[]) => ({
  type: actions.ADD_ROW,
  row,
})
export const removeRow = (number: number) => ({
  type: actions.REMOVE_ROW,
  number,
})
export const increment = (id: number, rowIndex: number) => ({
  type: actions.INCREMENT,
  id,
  rowIndex,
})
export const percentsToggle = (rowIndex: number) => ({
  type: actions.PERCENTS_TOGGLE,
  rowIndex,
})
export const showClosest = (targetId: number) => ({
  type: actions.SHOW_CLOSEST,
  targetId,
})
export const setNumberOfClosest = (numberOfClosest: number) => ({
  type: actions.SET_NUMBER_OF_CLOSEST,
  numberOfClosest,
})

export type State = {
  cells: CellInterface[][];
  tableFooter: CellInterface[];
  numberOfClosest: number;
};

export const getCells = (state: State) => state.cells;
export const getTableFooter = (state: State) => state.tableFooter;

const initialState: State = {
  cells: [],
  tableFooter: [],
  numberOfClosest: 0,
};

export const reducer = (state: State = initialState, action: ActionType) => {
  switch (action.type) {
    case 'SET_CELLS':
      return {
        ...state,
        cells: action.cells,
        tableFooter: getAverageValues(action.cells),
      };

    case 'ADD_ROW':
      return {
        ...state,
        cells: [
          ...state.cells,
          action.row,
        ],
        tableFooter: getAverageValues([...state.cells, action.row])
      };

    case 'REMOVE_ROW':
      const filteredCells = state.cells.filter((row, index) => index !== action.number)
      return {
        ...state,
        cells: filteredCells,
        tableFooter: getAverageValues(filteredCells),
      }

    case 'INCREMENT':
      const cells = [...state.cells]
      const incrementedCell = cells[action.rowIndex].find((cell) => cell.id === action.id);
      if (incrementedCell) {
        incrementedCell.amount++;
      }
      return {
        ...state,
        ...cells,
        tableFooter: getAverageValues(cells),
      }

      case 'PERCENTS_TOGGLE':
        const percentsCells = [...state.cells]
        percentsCells[action.rowIndex] = percentsCells[action.rowIndex].map((cell) => ({
          ...cell,
          isPercentsShown: !cell.isPercentsShown
        }))
        return {
          ...state,
          cells: percentsCells,
        }

      case 'SET_NUMBER_OF_CLOSEST':
        return {
          ...state,
          numberOfClosest: action.numberOfClosest,
        }

      case 'SHOW_CLOSEST':
        const closest = findClosest(state.cells, action.targetId, state.numberOfClosest);
        const closestCells = [...state.cells];
        closestCells.forEach(row => {
          row.forEach((cell) => {
            if (closest.includes(cell)) {
              cell.isCloser = !cell.isCloser
            }
          })
        })
        return {
          ...state,
          cells: closestCells,
        };

    default:
      return state;
  }
};

export const AppContext = React.createContext(initialState)
