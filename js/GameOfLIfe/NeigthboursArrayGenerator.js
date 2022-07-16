const neightbourChecker = (row, column, habitat, NumberOfRows) => {
  let initialPositionRow = row - 1;
  const initialPositionColumn = column - 1;
  let rowCheckCounter = 0;
  let livedNeightbours = 0;
  let numbersOfRowsToCheck = 3;

  if (row === 0) {
    initialPositionRow = row;
    numbersOfRowsToCheck = 2;
  }

  if (row + 1 === habitat.length) {
    numbersOfRowsToCheck = 2;
  }

  do {
    livedNeightbours += neighboursRowsChecker(
      initialPositionRow,
      initialPositionColumn,
      habitat,
      NumberOfRows
    );

    initialPositionRow += 1;
    rowCheckCounter += 1;
  } while (rowCheckCounter !== numbersOfRowsToCheck);

  if (habitat[row][column] === 0) {
    return livedNeightbours - 1;
  }

  return livedNeightbours;
};

const neighboursRowsChecker = (row, column, habitat) => {
  let columnTested = column;
  let cellToTest = habitat[row][columnTested];
  let aliveNeightBour = 0;
  let testCounter = 0;

  do {
    cellToTest = habitat[row][columnTested];
    if (cellToTest === 0) {
      aliveNeightBour += 1;
    }

    testCounter += 1;
    columnTested += 1;
  } while (testCounter !== 3);

  return aliveNeightBour;
};