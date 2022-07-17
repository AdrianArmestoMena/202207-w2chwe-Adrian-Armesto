import { cellChanger } from "./GameOfLIfe/CellChanger.js";
import HabitatArrayGenerator from "./GameOfLIfe/HabitatArrayGenerator.js";
import GenerateLivedCells from "./GameOfLIfe/GenerateLivedCells.js";

const createdHtmlGrid = () => {
  const main = document.getElementById("main");
  const containerGrid = document.createElement("div");
  containerGrid.setAttribute("id", "grid");
  main.appendChild(containerGrid);
  gridWithLife.forEach((row) => {
    const gridContainer = document.getElementById("grid");
    const newRow = document.createElement("div");
    newRow.setAttribute("id", "grid-row");
    gridContainer.appendChild(newRow);

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

const gridWithOutLife = HabitatArrayGenerator(60, 60);
let gridWithLife = GenerateLivedCells(gridWithOutLife);
createdHtmlGrid(gridWithLife);

setInterval(() => {
  const grid = document.getElementById("grid");
  grid.remove();

  gridWithLife = cellChanger(gridWithLife);
  createdHtmlGrid(gridWithLife);
}, 1000);
