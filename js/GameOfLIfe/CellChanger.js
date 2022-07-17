import HabitatArrayGenerator from "./HabitatArrayGenerator.js";
import GenerateLivedCells from "./GenerateLivedCells.js";
import { neightbourChecker } from "./NeigthboursrChecker.js";
import stateChanger from "./StateChanger.js";

const gridWithOutLive = HabitatArrayGenerator(20, 20);
const gridWithLife = GenerateLivedCells(gridWithOutLive);

const cellChanger = (grid) => {
  let newGrid = [];

  grid.forEach((row) => {
    let rowIndex = grid.indexOf(row);
    let rowToPush = newRowCreator(row, rowIndex, grid);
    newGrid.push(rowToPush);
  });

  return newGrid;
};

const newRowCreator = (row, rowIndex, grid) => {
  const newRow = [];

  for (let cellIndex = 0; cellIndex < row.length; cellIndex += 1) {
    let actualCellStatus = row[cellIndex];
    let numberOfAliveNeightBours = neightbourChecker(rowIndex, cellIndex, grid);
    let newState = stateChanger(actualCellStatus, numberOfAliveNeightBours);
    newRow.push(newState);
    cellIndex;
  }

  return newRow;
};

export { cellChanger, newRowCreator };
