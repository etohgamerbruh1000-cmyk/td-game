// rendering.ts

import { towerLibrary } from "./entities";
import { GameManager } from "./main";

export class renderingHelper {
  // TODO

  towerLibrary.forEach((tower: any) => {
  renderTower(tower.name);
});


const game = new GameManager(5, 5)
}



towerLibrary