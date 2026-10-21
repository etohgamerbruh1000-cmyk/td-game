// main.ts

import { Enemy, Tower, TowerBlueprint, towerLibrary } from "./entities.js";

export interface GameState {
  gold: number;
  towersPlaced: Array<{
    ID: string;
    placement: Array<{ row: number; col: number }>;
  }>;
}

// main arrays
export const activeEnemies: Enemy[] = [];
export const activeTowers: crypto.id[] = []
export let gridCells: Array<{ row: number; col: number }> = [];
let accessibleCells: Array<{ row: number; col: number }> = [];

export let gameState: GameState = {
  gold: 500,
  towersPlaced: [],
};

export function getTowerById = {


}


//* grid helper 
function createGridCells(length: number, width: number) {     
  const cellList = document.getElementById("cellList")
  if (!cellList) {
    console.error("CellList doesn't exist in this context"); return
  }
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < width; j++) {
      const cell = document.createElement("div");
      cell.id = `cell-${i}-${j}`;  cellList.appendChild(cell);
    }
  }

  accessibleCells = [...gridCells];
}

//* tower helpers 
export function checkTowerCost(name: string) {
  const matchingTower = towerLibrary.find((tower) => tower.name === name);
  if (!matchingTower) {
    console.error("No tower ID found.");
    return false;
  } else {
    if (gameState.gold >= matchingTower.cost) {
      return true;
    }
  }
  console.log(`Too broke to buy tower ${name} haha`);
  return false;
}

// runs each time a tower is placed
export function updateAccessibleCells() {
  gridCells;
}

export function checkTowerPlacement(
  location: Array<{ row: number; col: number }> = [],
): boolean {
  if (location.length === 0) return false;

  for (const targetCell of location) {
    // Look for the target cell in the accessible list
    const isAccessible = accessibleCells.some(
      (cell) => cell.row === targetCell.row && cell.col === targetCell.col,
    );
    // If any part of the footprint is blocked or out of bounds, fail the check
    if (!isAccessible) {
      return false;
    }
  }
  return true;
}

//* main function 
export function placeTower(
  id: string,
  location: Array<{ row: number; col: number }> = [],
) {
  if (checkTowerCost(id) && checkTowerPlacement(location)) {
       const newTower = new Tower(towerLibrary.archerTower, location)
  }
}

export function checkTowerLevel(id: number): boolean {
  return 
}

//* Startup rendering 
export function initGameManager(gridLength: number, gridWidth: number) {
  createGridCells(gridLength, gridWidth);
}

