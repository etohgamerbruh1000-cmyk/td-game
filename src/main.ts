// main.ts

import { towerLibrary } from "./towerLibrary.js";

export interface GameState {
  gold: number;
  towersPlaced: Array<number>;
}

export const gameState: GameState = {
  gold: 500,
  towersPlaced: [],
};

// main helper function
export function placeTower(id: string) {
if (checkTowerCost(id) && checkTowerPlacement(id)) {


}
}

export function checkTowerCost(id: string) {
    const matchingTower = towerLibrary.find((id === towerID)) 
if (!matchingTower) {
console.error("No tower ID found.")
return false
} else {
if (matchingTower.cost >= gameState.gold) {
return true

}
}
}

createGridCells(5, 5)
export function createGridCells (length: number, width: number) {
    for (let i = 0; i < length; i++) {
            for (let j = 0; j < length; j++) {
        const cell = document.createElement("div")
        cell.id = `cell-${j}`
        
            }
    }


}
export const gridCells = []

export function checkTowerPlacement(id: string) {
gridCells.forEach(cell => {
    if (!cell || cell !== id) {

        continue;
    }
});
return true
}

towerLibrary.find((towerID)(id === towerID ) => {
 
});


export function renderTower() {
// TODO:

}
// =================
//* Startup rendering
// =================

towerLibrary.forEach(tower => {
    renderTower()
});