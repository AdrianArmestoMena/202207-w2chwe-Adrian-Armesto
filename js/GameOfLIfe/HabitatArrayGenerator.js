const HabitatArrayGenerator = (cellsHabitatsRows, cellsHabitatsColums) => {
  const cellsHabitats = [];
  let rowsPushCounter = 0;
  let columsPushCounter = 0;
  let ErrorMessage = "Parameters must be a number betwen o and 100";

  if (
    !Number.isInteger(cellsHabitatsColums) ||
    !Number.isInteger(cellsHabitatsRows) ||
    (cellsHabitatsColums || cellsHabitatsRows) > 100 ||
    (cellsHabitatsColums || cellsHabitatsRows) === 0
  ) {
    return ErrorMessage;
  }
  do {
    cellsHabitats.push([]);
    rowsPushCounter++;
  } while (cellsHabitatsRows !== rowsPushCounter);

  cellsHabitats.forEach((row) => {
    do {
      row.push(1);
      columsPushCounter++;
    } while (cellsHabitatsColums !== columsPushCounter);
    columsPushCounter = 0;
  });

  return cellsHabitats;
};

module.exports = HabitatArrayGenerator;
