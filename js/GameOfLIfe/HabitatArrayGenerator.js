const HabitatArrayGenerator = (celulesHabitatsRows, celulesHabitatsColums) => {
  const celulesHabitats = [];
  celulesHabitats.push([]);
  let rowsPushCounter = 1;
  let columsPushCounter = 0;
  let ErrorMessage = "Parameters must be a number betwen o and 100";

  if (
    !Number.isInteger(celulesHabitatsColums) ||
    !Number.isInteger(celulesHabitatsRows) ||
    (celulesHabitatsColums || celulesHabitatsRows) > 100 ||
    (celulesHabitatsColums || celulesHabitatsRows) === 0
  ) {
    return ErrorMessage;
  }
  do {
    celulesHabitats.push([]);
    rowsPushCounter++;
  } while (celulesHabitatsRows !== rowsPushCounter);

  celulesHabitats.forEach((row) => {
    do {
      row.push(1);
      columsPushCounter++;
    } while (celulesHabitatsColums !== columsPushCounter);
    columsPushCounter = 0;
  });

  return celulesHabitats;
};
const Habitat = HabitatArrayGenerator(32, 41);
console.log(Habitat);
module.exports = HabitatArrayGenerator;
