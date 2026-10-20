// main.ts

import { Tower, towerLibrary } from "./entities.js";

export interface GameState {
  gold: number;
  towersPlaced: Array<{ ID: string; placement: Array<{ row: number; col: number }> = []; }>;
}

export class GameManager {
  // main arrays
  public activeEnemies = ([] = []);
  public gridCells: Array<{ row: number; col: number }> = [];
  private accessibleCells: Array<{ row: number; col: number }> = [];

  public gameState: GameState = {
  gold: 500,
  towersPlaced: [],
};

//* grid helper

private createGridCells(length: number, width: number) {
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      const cell = document.createElement("div");
      cell.id = `cell-${i}-${j}`;
    }
  }
}

//* tower helpers

public checkTowerCost(name: string) {
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


// runs each time a tower is placed
public updateAccessibleCells() {
this.gridCells

}

public checkTowerPlacement(location: ) {
  for (const cell of this.accessibleCells) {
    if (cell.col) {
      return;
    }
  }
  return true;
}

//* main function
public placeTower(name: string) {
  if (this.checkTowerCost(name) && this.checkTowerPlacement(name)) {
    // add placement logic here
  }
}

public checkTowerLevel(position: ): boolean {
return 


}



public renderTower(name: string) {
  // TODO:
}

//* Startup rendering

constructor(gridLength: number, gridWidth: number) {
this.createGridCells(gridLength, gridWidth);
}





}




