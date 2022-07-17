/* eslint-disable import/extensions */
import { cellChanger } from "./GameOfLIfe/CellChanger.js";
import HabitatArrayGenerator from "./GameOfLIfe/HabitatArrayGenerator.js";
import GenerateLivedCells from "./GameOfLIfe/GenerateLivedCells.js";

const gridWithOutLife = HabitatArrayGenerator(60, 60);
let gridWithLife = GenerateLivedCells(gridWithOutLife);

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

createdHtmlGrid(gridWithLife);

setInterval(() => {
  const element = document.getElementById("grid");
  element.remove();

  gridWithLife = cellChanger(gridWithLife);
  createdHtmlGrid(gridWithLife);
}, 1000);
