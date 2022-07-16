import { neightbourChecker } from "./NeigthboursrChecker";

describe("Given the function neightbourChecker", () => {
  describe("When it's called and it recieves an array and a position", () => {
    test("Then function should return the number of alive neightbours", () => {
      const givenArray = [
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 1, 1],
        [1, 1, 0, 0, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
      ];
      const column = 2;
      const row = 3;
      const expectedResult = 6;
      const receivedResult = neightbourChecker(row, column, givenArray);

      expect(receivedResult).toEqual(expectedResult);
    });
    test("Then function should return the number of alive neightbours", () => {
      const givenArray = [
        [1, 0, 0, 1, 1, 1],
        [1, 0, 0, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
      ];
      const column = 2;
      const row = 0;
      const expectedResult = 3;
      const receivedResult = neightbourChecker(row, column, givenArray);

      expect(receivedResult).toEqual(expectedResult);
    });
    test("Then function should return the number of alive neightbours", () => {
      const givenArray = [
        [1, 0, 0, 1, 1, 1],
        [1, 0, 0, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [0, 1, 1, 1, 1, 1],
        [1, 1, 0, 1, 1, 1],
      ];
      const column = 1;
      const row = 9;
      const expectedResult = 2;
      const receivedResult = neightbourChecker(row, column, givenArray);

      expect(receivedResult).toEqual(expectedResult);
    });
  });
});
