import { cellChanger } from "./GameOfLIfe/CellChanger.js";
import HabitatArrayGenerator from "./GameOfLIfe/HabitatArrayGenerator.js";
import GenerateLivedCells from "./GameOfLIfe/GenerateLivedCells.js";

cellChanger(GenerateLivedCells(HabitatArrayGenerator(20, 20)));
