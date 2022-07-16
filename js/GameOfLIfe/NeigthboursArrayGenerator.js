const neightboursArrayGenerator = (habitat, row, column) => {
  const Left = habitat[row][column - 1];
  const LeftUp = habitat[row - 1][column - 1];
  const Up = habitat[row - 1][column];
  const UpRight = habitat[row - 1][column + 1];
  const Right = habitat[row][column + 1];
  const RightDown = habitat[row + 1][column + 1];
  const Down = habitat[row + 1][column];
  const DownLeft = habitat[row + 1][column - 1];
  const neightbours = [];

  neightbours.push(Left, LeftUp, Up, UpRight, Right, RightDown, Down, DownLeft);

  if (row === 0) {
    neightbours.push(Left, Right, RightDown, Down, DownLeft);
  }
  if (row >= habitat.lenght - 1)
    neightbours.push(
      Left,
      LeftUp,
      Up,
      UpRight,
      Right,
      RightDown,
      Down,
      DownLeft
    );
  return neightbours;
};

const expectedResult = [
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
];

console.log(neightboursArrayGenerator(expectedResult, 4, 1));
