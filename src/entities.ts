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
  // Placeholder |v; change
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
  name: string;
  cost: number;
  damage: number;
  health: number;
  maxHealth: number;
  fireRate: number; // milliseconds
  location: Array<{ row: number; col: number }>;

  constructor(
    name: string,
    cost: number,
    damage: number,
    health: number,
    maxHealth: number,
    fireRate: number,
    location: Array<{ row: number; col: number }>,
  ) {
    this.name = name;
    this.cost = cost;
    this.damage = damage;
    this.health = health;
    this.maxHealth = maxHealth;
    this.fireRate = fireRate;
    this.location = location;
  }
}

export class Tower extends Entity {
  constructor(
    name: string,
    cost: number,
    damage: number,
    health: number,
    maxHealth: number,
    fireRate: number,
        location: Array<{ row: number; col: number }>,
  ) {
    super(name, cost, damage, health, maxHealth, fireRate, location);
  }
}

export class Enemy extends Entity {}
