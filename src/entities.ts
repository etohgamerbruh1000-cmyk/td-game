// towerLibrary.ts

export interface TowerLevel {
  level: number;
  upgradeCost: number;
  damage: number;
  fireRate: number; // milliseconds
}

export interface Tower {
  name: string;
  cost: number;
  damage: number;
  health: number;
  maxHealth: number;
  fireRate: number; // milliseconds

  levels: Array<TowerLevel>; // typed array of levels
}

export const towerLibrary: Record<string, Tower> = {
  // Placeholder |v
  archerTower: {
    name: "Archer Tower",
    cost: 100,
    damage: 10,
    health: 100,
    maxHealth: 100,
    fireRate: 1000,
    levels: [
      { level: 2, upgradeCost: 75, damage: 15, fireRate: 900 },
      { level: 3, upgradeCost: 150, damage: 22, fireRate: 800 },
    ],
  },
};

export class Entity {



  
}

export class Tower extends Entity {



  
}

export class Entity {



  
}

