export interface Cell {
  amount: number;
  id: number;
  isPercentsShown?: boolean,
  isCloser?: boolean,
};

interface SetCells {
  type: string;
  cells: Cell;
}

interface AddRow {
  type: string;
  row: Cell[]
}

interface RemoveRow {
  type: string;
  number: number;
}

interface Increment {
  type: string;
  id: number;
  rowIndex: number;
}

interface PercentsToggle {
  type: string;
  rowIndex: number;
}

interface ShowClosest {
  type: string;
  target: Cell;
}

interface SetNumberOfClosest {
  type: string;
  numberOfClosest: number;
}
