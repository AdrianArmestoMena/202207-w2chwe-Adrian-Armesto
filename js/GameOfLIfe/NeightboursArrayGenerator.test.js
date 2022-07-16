const neightboursArrayGenerator = require("./NeigthboursArrayGenerator");

describe("Given the function NeightboursArrayGenerator", () => {
  describe("When it's called and it recieves an array, array.lenght, and a position", () => {
    test("Then function should return an array with the neightbours", () => {
      const receivedArray = [
        [1, 1, 1, 1, 1, 1],
        [1, 2, 3, 4, , 1],
        [1, 9, 1, 5, 1, 1],
        [1, 8, 7, 6, 1, 1],
      ];

      const column = 2;
      const row = 2;
      const expectedResult = [9, 2, 3, 4, 5, 6, 7, 8];
      const receivedResult = neightboursArrayGenerator(
        row,
        column,
        receivedArray,
        receivedArray.length
      );

      expect(receivedResult).toEqual(expectedResult);
    });
  });
});
