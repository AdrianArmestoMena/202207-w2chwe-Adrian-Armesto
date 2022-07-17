import GenerateLivedCells from "./GenerateLivedCells";

describe("Given the function GenerateLivedCells", () => {
  describe("When it's called and it recieves an array", () => {
    test("Then function should return an array with a 0 in the positions 0 1, 1 2,2 0,2 1,2 2", () => {
      const receivedArray = [
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
      ];
      const expectedResult = [
        [1, 0, 1, 1, 1, 1],
        [1, 1, 0, 1, 1, 1],
        [0, 0, 0, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
      ];
      const receivedResult = GenerateLivedCells(receivedArray);

      expect(receivedResult).toEqual(expectedResult);
    });
  });
});
