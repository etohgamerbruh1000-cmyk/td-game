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
  fireRate: number; // milliseconds
  levels: Array<TowerLevel>; // typed array of levels
}

export const towerLibrary: Record<string, Tower> = {
  archerTower: {
    name: "Archer Tower",
    cost: 100,
    damage: 10,
    fireRate: 1000,
    levels: [
      { level: 2, upgradeCost: 75, damage: 15, fireRate: 900 },
      { level: 3, upgradeCost: 150, damage: 22, fireRate: 800 }
    ]
  }
};
