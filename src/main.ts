// main.ts

import { TowerBlueprint, towerLibrary } from "./entities.js";

export interface GameState {
  gold: number;
  towersPlaced: Array<{
    ID: string;
    placement: Array<{ row: number; col: number }>;
  }>;
}

export class GameManager {
  // main arrays
  public activeEnemies = any[] = [];
  public gridCells: Array<{ row: number; col: number }> = [];
  private accessibleCells: Array<{ row: number; col: number }> = [];

  public gameState: GameState = {
    gold: 500,
    towersPlaced: [],
  };

  //* grid helper

  private createGridCells(length: number, width: number) {
    
    const cellList = document.getElementById("cellList")
    if (!cellList) {
      console.error("CellList doesn't exist in this context"); return
    }
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < width; j++) {
        const cell = document.createElement("div");
        cell.id = `cell-${i}-${j}`;
 cellList.appendChild(cell);
      }
    }
     this.accessibleCells = [...this.gridCells];
  }

  //* tower helpers

  public checkTowerCost(name: string) {
    const matchingTower = towerLibrary.find((tower) => tower.name === name);
    if (!matchingTower) {
      console.error("No tower ID found.");
      return false;
    } else {
      if (this.gameState.gold >= matchingTower.cost) {
        return true;
      }
    }
    console.log(`Too broke to buy tower ${name} haha`);
    return false;
  }

  // runs each time a tower is placed
  public updateAccessibleCells() {
    this.gridCells;
  }

  public checkTowerPlacement(
    location: Array<{ row: number; col: number }> = [],
  ): boolean {
    if (location.length === 0) return false;

    for (const targetCell of location) {
      // Look for the target cell in the accessible list
      const isAccessible = this.accessibleCells.some(
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
  public placeTower(
    name: string,
    location: Array<{ row: number; col: number }> = [],
  ) {
    if (this.checkTowerCost(name) && this.checkTowerPlacement(location)) {
      
    }
  }

  public checkTowerLevel(
    location: Array<{ row: number; col: number }> = [],
  ): boolean {
    return;
  }

  //* Startup rendering

  constructor(gridLength: number, gridWidth: number) {
    this.createGridCells(gridLength, gridWidth);
  }
}
