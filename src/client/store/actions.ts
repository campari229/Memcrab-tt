import { Cell } from '../../Interfaces';

export const actions = {
  SET_CELLS: 'SET_CELLS',
  ADD_ROW: 'ADD_ROW',
  REMOVE_ROW: 'REMOVE_ROW',
  INCREMENT: 'INCREMENT',
  PERCENTS_TOGGLE: 'PERCENTS_TOGGLE',
  SET_NUMBER_OF_CLOSEST: 'SET_NUMBER_OF_CLOSEST',
  SHOW_CLOSEST: 'SHOW_CLOSEST'
} as const

interface SetCells {
  type: typeof actions.SET_CELLS;
  cells: Cell[][];
}

interface AddRow {
  type: typeof actions.ADD_ROW;
  row: Cell[]
}

interface RemoveRow {
  type: typeof actions.REMOVE_ROW;
  number: number;
}

interface Increment {
  type: typeof actions.INCREMENT;
  id: number;
  rowIndex: number;
}

interface PercentsToggle {
  type: typeof actions.PERCENTS_TOGGLE;
  rowIndex: number;
}

interface ShowClosest {
  type: typeof actions.SHOW_CLOSEST;
  target: Cell;
}

interface SetNumberOfClosest {
  type: typeof actions.SET_NUMBER_OF_CLOSEST;
  numberOfClosest: number;
}

export type ActionType = SetCells | AddRow | RemoveRow | Increment | PercentsToggle | ShowClosest | SetNumberOfClosest