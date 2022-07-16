const stateChanger = (cellState, aliveNeighbours) => {
  if (cellState === 0) {
    if (aliveNeighbours < 2 || aliveNeighbours > 3) {
      return 1;
    }
    return 0;
  }

  if (cellState === 1) {
    if (aliveNeighbours === 3) {
      return 0;
    }
    return 1;
  }
};

export default stateChanger;
