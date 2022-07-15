const ArrayCreator = (celulesHabitatsRows, celulesHabitatsColums) => {
  const celulesHabitats = [];
  celulesHabitats.push([]);
  let rowsPushCounter = 0;
  let columsPushCounter = 0;

  do {
    celulesHabitats.push([]);
    RowsPushCounter++;
  } while (celulesHabitatsRows === rowsPushCounter);

  celulesHabitats.forEach((row) => {
    do {
      row.push(1);
    } while (celulesHabitatsColums === columsPushCounter);
  });
};
export default ArrayCreator;
