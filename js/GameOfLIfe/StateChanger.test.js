import stateChanger from "./StateChanger";

describe("Given the function stateChanger", () => {
  describe("When it's called and it recieves the state of a cell(0, alive or 1,death) and and the number of alive neightbours", () => {
    test("Then function should return 1 or 0 depends on the number of alive neightbours", () => {
      const cellState = 0;
      const aliveNeighbours = 4;
      const expectedResult = 1;
      const receivedResult = stateChanger(cellState, aliveNeighbours);

      expect(receivedResult).toEqual(expectedResult);
    });
    test("Then function should return 1 or 0 depends on the number of alive neightbours", () => {
      const cellState = 1;
      const aliveNeighbours = 3;
      const expectedResult = 0;
      const receivedResult = stateChanger(cellState, aliveNeighbours);

      expect(receivedResult).toEqual(expectedResult);
    });
    test("Then function should return 1 or 0 depends on the number of alive neightbours", () => {
      const cellState = 0;
      const aliveNeighbours = 3;
      const expectedResult = 0;
      const receivedResult = stateChanger(cellState, aliveNeighbours);

      expect(receivedResult).toEqual(expectedResult);
    });
    test("Then function should return 1 or 0 depends on the number of alive neightbours", () => {
      const cellState = 1;
      const aliveNeighbours = 2;
      const expectedResult = 1;
      const receivedResult = stateChanger(cellState, aliveNeighbours);

      expect(receivedResult).toEqual(expectedResult);
    });
  });
});
