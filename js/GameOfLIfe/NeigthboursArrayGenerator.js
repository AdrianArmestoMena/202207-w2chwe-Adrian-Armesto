const neightbourChecker = (row, column, habitat, NumberOfRows) => {
  let initialPositionRow = row - 1;
  const initialPositionColumn = column - 1;
  let rowCheckCounter = 0;
  let livedNeightbours = 0;

  do {
    debugger;
    livedNeightbours += upperRowCellsNeighbours(
      initialPositionRow,
      initialPositionColumn,
      habitat,
      NumberOfRows
    );

    initialPositionRow += 1;
    rowCheckCounter += 1;
    debugger;
  } while (rowCheckCounter !== 3);
  return livedNeightbours;
};

const upperRowCellsNeighbours = (row, column, habitat) => {
  let columnTested = column;
  let cellToTest = habitat[row][columnTested];
  let aliveNeightBour = 0;
  let testCounter = 0;
  debugger;
  do {
    cellToTest = habitat[row][columnTested];
    if (cellToTest === 0) {
      aliveNeightBour += 1;
    }

    testCounter += 1;
    columnTested += 1;
    debugger;
  } while (testCounter !== 3);

  debugger;
  return aliveNeightBour;
};

const expectedResult = [
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1, 1],
  [1, 14, 1, 0, 1, 1],
  [1, 19, 14, 0, 1, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
];

neightbourChecker(3, 2, expectedResult);
