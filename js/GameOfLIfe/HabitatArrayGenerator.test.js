const HabitatArrayGenerator = require("./HabitatArrayGenerator");
describe("Given the function HabitatArrayGenerator", () => {
  describe("When it's called and it recieves 10 and 6", () => {
    test("Then function should return an array with 23 array in, and each array should contain 46 literal expresions this the value 1", () => {
      const numberOfRows = 10;
      const numberOfColums = 6;
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

      const receivedResult = HabitatArrayGenerator(
        numberOfRows,
        numberOfColums
      );

      expect(receivedResult).toEqual(expectedResult);
    });
  });
});
