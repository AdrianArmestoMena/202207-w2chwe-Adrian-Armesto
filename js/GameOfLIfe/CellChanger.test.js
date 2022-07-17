import { cellChanger, newRowCreator } from "./CellChanger.js";

describe("Given the function cellChanger", () => {
  describe("When it's called and it recieves a grid with alive cells, and death cells", () => {
    test("Then function should return a grid with changes on the alive cells", () => {
      const grid = [
        [1, 0, 1, 1, 1, 1],
        [1, 1, 0, 1, 1, 1],
        [0, 0, 0, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 0, 0, 1, 1],
        [1, 1, 1, 1, 0, 1],
      ];
      const expectedResult = [
        [1, 1, 1, 1, 1, 1],
        [0, 1, 0, 1, 1, 1],
        [1, 0, 0, 1, 1, 1],
        [1, 1, 1, 0, 1, 1],
        [1, 1, 1, 0, 1, 1],
        [1, 1, 1, 0, 1, 1],
      ];

      const receivedResult = cellChanger(grid);

      expect(receivedResult).toEqual(expectedResult);
    });
  });
});
