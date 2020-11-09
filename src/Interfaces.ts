export interface CellInterface {
  amount: number;
  id: number;
  isPercentsShown?: boolean,
  isCloser?: boolean,
};

interface SetCells {
  type: string;
  cells: CellInterface;
}

interface AddRow {
  type: string;
  row: CellInterface[]
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
  target: CellInterface;
}

interface SetNumberOfClosest {
  type: string;
  numberOfClosest: number;
}
