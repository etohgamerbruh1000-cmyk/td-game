// main.ts

// ==========================================
// 1. IMPORTS & ARCHITECTURE (Always Top)
// ==========================================
import { Enemy, Tower, TowerBlueprint, towerLibrary } from "./entities.js";

export interface GameState {
  gold: number;
  towersPlaced: Array<{
    ID: string;
    placement: Array<{ row: number; col: number }>;
  }>;
}

// ==========================================
// 2. CORE GAME STATE & DATA ARRAYS
// ==========================================
export let gameState: GameState = {
  gold: 500,
  towersPlaced: [],
};

export const activeEnemies: Enemy[] = [];
export const activeTowers: Map<string, string> = new Map();
export let gridCells: Array<{ row: number; col: number }> = [];
let accessibleCells: Array<{ row: number; col: number }> = [];

// ==========================================
// 3. MAIN ACTION WORKFLOWS & DRIVERS
// ==========================================
//* Startup rendering
export function initGameManager(gridLength: number, gridWidth: number) {
  createGridCells(gridLength, gridWidth);
}

//* main function
export function placeTower(
  id: string,
  location: Array<{ row: number; col: number }> = [],
) {
  const matchingTower = towerLibrary[id];
  if (checkTowerCost(id) && checkTowerPlacement(location)) {
    gameState.gold -= matchingTower.cost;

    const newTower = new Tower(matchingTower, location);

    const locationKeys = location.map(({ row, col }) => `${row},${col}`);

    for (const key of locationKeys) {
      activeTowers.set(key, newTower.id);
    }
  }
}

export function chargeUpgradeCost(tower: Tower) {   
  // Level 1 looks at levels[0].upgradeCost (75 gold to move to lvl 2)
  // Level 2 looks at levels[1].upgradeCost (150 gold to move to lvl 3)
  const upgradeCost = tower.levels[tower.currentLevel - 1]?.upgradeCost ?? 0;
  gameState.gold -= upgradeCost;
}



export function upgradeTower(
  id: string,
  location: Array<{ row: number; col: number }> = [],
  tower:Tower
) {
  const matchingTower = towerLibrary[id];

  if (checkTowerCost(id) ) {
  

    // 1. Logic fix: A brand new tower's current level should be less than or equal to maxLevel
    if (tower.currentLevel <= tower.maxLevel) {
      chargeUpgradeCost(tower)
applyUpgradeEffect()




    }

    const locationKeys = location.map(({ row, col }) => `${row},${col}`);

    for (const key of locationKeys) {
      activeTowers.set(key, newTower.id);
    }
  }
}
// ==========================================
// 4. CORE VALIDATIONS & HELPERS
// ==========================================

//* Uses name, ID isn't useful here becauswe it doesnt say ANYTHING about the tower!!!
export function checkTowerCost(id: string) {
  const matchingTower = towerLibrary[id];
  if (!matchingTower) {
    console.error("No tower blueprint found.");
    return false;
  }

  if (gameState.gold < matchingTower.cost) {
    console.log(`Too broke to buy tower ${matchingTower.name} haha`);
    return false;
  }
  return true;
}

export function applyUpgradeEffect(tower: Tower) {

tower.currentLevel++
// applies actual effect
for (const e of tower.blueprint.levels)

}

export function checkTowerPlacement(
  location: Array<{ row: number; col: number }>,
): boolean {
  // If no location is provided, it's an invalid placement
  if (!location || location.length === 0) return false;

  for (const cell of location) {
    // 1. Convert each cell object into the string key format ("row,col")
    const locationKey = `${cell.row},${cell.col}`;

    // 2. Check if a tower ALREADY exists at this key
    if (activeTowers.has(locationKey)) {
      console.log(`Placement failed: Cell ${locationKey} is already occupied!`);
      return false; // Immediately fail if even one cell is blocked
    }
  }

  // If the loop finishes without finding any towers, the spot is completely free!
  return true;
}

export function checkTowerLevel(id: string): boolean {
  const matchingTower = towerLibrary[id];
  // TODO: Fix. Now.
  if (!matchingTower) {
    console.error("No matching tower");
    return false;
  }
  return matchingTower.maxLevel >= Tower.currentLevel;
}

// runs each time a tower is placed
export function updateAccessibleCells(length: number, width: number) {
  accessibleCells.length = 0;
  for (let row = 0; row < length; row++) {
    for (let col = 0; col < width; col++) {
      const locationKey = `${row},${col}`;
      const hasTower = activeTowers.has(locationKey);
      if (!hasTower) {
        accessibleCells.push({ row, col });
      }
    }
  }
}

// ==========================================
// 5. INTERNAL GRID SETUP & UTILITIES (Least Important)
// ==========================================
// Turns the location array into a usable string that activeTowers can use

//* grid helper
function createGridCells(length: number, width: number) {
  const cellList = document.getElementById("cellList");
  if (!cellList) {
    console.error("CellList doesn't exist in this context");
    return;
  }
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < width; j++) {
      const cell = document.createElement("div");
      cell.id = `cell-${i}-${j}`;
      cellList.appendChild(cell);
    }
  }

  accessibleCells = [...gridCells];
}
