const stateChanger = (grid, row, column, aliveNeighbours) => {
  let cell = grid[row][column];

  if (cell === 0) {
    if (aliveNeighbours < 2 || aliveNeighbours < 3) {
      return 1;
    }
    return 0;
  }

  if (cell === 1) {
    if (aliveNeighbours === 3) {
      return 0;
    }
    return 1;
  }
};
