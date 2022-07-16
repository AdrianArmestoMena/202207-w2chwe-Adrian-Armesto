const neightboursArrayGenerator = (row, column, habitat, NumberOfRows) => {
  const neightbours = [];

  if (row === 0) {
    const Left = habitat[row][column - 1];
    const Right = habitat[row][column + 1];
    const RightDown = habitat[row + 1][column + 1];
    const Down = habitat[row + 1][column];
    const DownLeft = habitat[row + 1][column - 1];
    neightbours.push(Left, Right, RightDown, Down, DownLeft);
    return neightbours;
  }

  if (row + 1 === NumberOfRows) {
    const Left = habitat[row][column - 1];
    const Right = habitat[row][column + 1];
    const LeftUp = habitat[row - 1][column - 1];
    const Up = habitat[row - 1][column];
    const UpRight = habitat[row - 1][column + 1];
    neightbours.push(Left, LeftUp, Up, UpRight, Right);
    return neightbours;
  }

  const Left = habitat[row][column - 1];
  const Right = habitat[row][column + 1];
  const RightDown = habitat[row + 1][column + 1];
  const Down = habitat[row + 1][column];
  const DownLeft = habitat[row + 1][column - 1];
  const LeftUp = habitat[row - 1][column - 1];
  const Up = habitat[row - 1][column];
  const UpRight = habitat[row - 1][column + 1];

  neightbours.push(Left, LeftUp, Up, UpRight, Right, RightDown, Down, DownLeft);

  return neightbours;
};
