import HabitatArrayGenerator from "./HabitatArrayGenerator";

describe("Given the function HabitatArrayGenerator", () => {
  describe("When it's called and it recieves 10 and 6", () => {
    test("Then function should return an array with 10 arrays in, and each array should contain 6 literal expresions this the value 1", () => {
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
  describe("When it's called and it recieves 'string1' and 'string2'", () => {
    test("Then function should return 'Parameters must be a number betwen o and 100'", () => {
      const numberOfRows = "string1";
      const numberOfColums = "string2";
      const expectedResult = "Parameters must be a number betwen o and 100";

      const receivedResult = HabitatArrayGenerator(
        numberOfRows,
        numberOfColums
      );

      expect(receivedResult).toEqual(expectedResult);
    });
  });
});
