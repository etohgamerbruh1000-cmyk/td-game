// main.ts

import { Tower, towerLibrary } from "./entities.js";

// main arrays
export const activeEnemies = ([] = []);
export const gridCells: HTMLElement[] = [];

export interface GameState {
  gold: number;
  towersPlaced: Array<{ ID: string; placeID: string }>;
}

export const gameState: GameState = {
  gold: 500,
  towersPlaced: [],
};

//* main function
export function placeTower(name: string) {
  if (checkTowerCost(name) && checkTowerPlacement(name)) {
    // add placement logic here
  }
}

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
}

export function createGridCells(length: number, width: number) {
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      const cell = document.createElement("div");
      cell.id = `cell-${i}-${j}`;
    }
  }
}

const accessibleIDs = 
export function checkTowerPlacement(id: string) {
  for (const cell of gridCells) {
    if (!cell || cell !== accessibleIDs) {
      return
    }
  }
  return true;
}

export function renderTower(name: string) {
  // TODO:
}
// =================
//* Startup rendering
// =================

createGridCells(5, 5);

towerLibrary.forEach((tower: any) => {
  renderTower(tower.name);
});
