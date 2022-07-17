import { cellChanger } from "./GameOfLIfe/CellChanger.js";
import HabitatArrayGenerator from "./GameOfLIfe/HabitatArrayGenerator.js";
import GenerateLivedCells from "./GameOfLIfe/GenerateLivedCells.js";

const gridWithOutLife = HabitatArrayGenerator(20, 20);
const gridWithLife = GenerateLivedCells(gridWithOutLife);

const createdHtmlGrid = () => {
  gridWithLife.forEach((row) => {
    const main = document.getElementById("grid");
    const newRow = document.createElement("div");
    newRow.setAttribute("id", "grid-row");
    main.appendChild(newRow);

    row.forEach((cell) => {
      const newcell = document.createElement("div");

      if (cell === 1) {
        newcell.className = "grid-row__cell--death";
      } else {
        newcell.className = "grid-row__cell--alive";
      }

      newRow.appendChild(newcell);
    });
  });
};
createdHtmlGrid(gridWithLife);
setInterval(cellChanger, 1000);
