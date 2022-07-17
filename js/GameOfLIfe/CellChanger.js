import { neightbourChecker } from "./NeigthboursrChecker.js";
import stateChanger from "./StateChanger.js";

const newRowCreator = (row, rowIndex, grid) => {
  const newRow = [];

  for (let cellIndex = 0; cellIndex < row.length; cellIndex += 1) {
    const actualCellStatus = row[cellIndex];
    const numberOfAliveNeightBours = neightbourChecker(
      rowIndex,
      cellIndex,
      grid
    );
    const newState = stateChanger(actualCellStatus, numberOfAliveNeightBours);
    newRow.push(newState);
  }

  return newRow;
};

const cellChanger = (grid) => {
  const newGrid = [];

  grid.forEach((row) => {
    const rowIndex = grid.indexOf(row);
    const rowToPush = newRowCreator(row, rowIndex, grid);
    newGrid.push(rowToPush);
  });

  return newGrid;
};

export { cellChanger, newRowCreator };
