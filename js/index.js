import HabitatArrayGenerator from "./GameOfLIfe/HabitatArrayGenerator.js";
import GenerateLivedCells from "./GameOfLIfe/GenerateLivedCells.js";
import { neightbourChecker } from "./GameOfLIfe/NeigthboursrChecker.js";
import stateChanger from "./GameOfLIfe/StateChanger.js";

const gridWithOutLive = HabitatArrayGenerator(20, 20);
const gridWithLife = GenerateLivedCells(gridWithOutLive);

const cellChanger = (grid) => {
  let newGrid = [];
  grid.forEach((row) => {
    let rowIndex = grid.indexOf(row);
    let rowToPush = newRowCreator(row, rowIndex, grid);
    newGrid.push(rowToPush);
  });
  console.table(newGrid);
  let TimerToExit = 0;
  const Interval = setInterval(cellChanger(newGrid), (TimerToExit += 1), 10000);
  if (TimerToExit == 4) {
    clearInterval(Interval);
  }
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

console.table(gridWithLife);
console.table(cellChanger(gridWithLife));
