// towerLibrary.ts

export interface TowerLevel {
  level: number;

  upgradeCost: number;
  damage: number;
  fireRate: number; // milliseconds
  health: number;
  maxHealth: number;
}

// Renamed from 'Tower' to 'TowerBlueprint' to avoid conflicting with class Tower below
export interface TowerBlueprint {
  name: string;
  cost: number;
  damage: number;
  health: number;
  maxHealth: number;
  fireRate: number; // milliseconds
  maxLevel: number;
  levels: Array<TowerLevel>;
}

export const towerLibrary: Record<string, TowerBlueprint> = {
  archerTower: {
    name: "Archer Tower",
    cost: 100,
    damage: 10,
    health: 100,
    maxHealth: 100,
    fireRate: 1000,
    maxLevel: 5,
    levels: [
      {
        level: 2,
        health: 120,
        maxHealth: 120,
        upgradeCost: 75,
        damage: 15,
        fireRate: 900,
      },
      {
        level: 3,
        health: 150,
        maxHealth: 150,
        upgradeCost: 150,
        damage: 22,
        fireRate: 800,
      },
    ],
  },
};

// Base Entity Class
export class Entity {
  public id: string; // The automatic native UUID
  public name: string;
  public cost: number;
  public damage: number;
  public health: number;
  public maxHealth: number;
  public fireRate: number; // milliseconds
  public location: Array<{ row: number; col: number }>;

  constructor(
    name: string,
    cost: number,
    damage: number,
    health: number,
    maxHealth: number,
    fireRate: number,
    location: Array<{ row: number; col: number }>,
  ) {
    // Generate UUID inside the base class automatically when created
    this.id = self.crypto.randomUUID();

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
  // TODO: Fix. Now.
  public blueprint: TowerBlueprint;
  public currentLevel: number = 1;
  public maxLevel: number;
  public levels: Array<TowerLevel>;

  constructor(
    blueprint: TowerBlueprint,
    location: Array<{ row: number; col: number }>,
  ) {
    // Grab the first level's stats (Index 0) to use as the base stats
    const baseStats = blueprint.levels[0];

    // Fallback values in case the blueprint array is empty
    super(
      blueprint.name,
      blueprint.cost, // Assuming base build cost is still at the top level
      baseStats?.damage ?? 0,
      baseStats?.health ?? 100, // Fallback if health isn't in Level 1
      baseStats?.maxHealth ?? 100,
      baseStats?.fireRate ?? 1000,
      location,
    );

    this.blueprint = blueprint
    this.maxLevel = blueprint.maxLevel;
    this.levels = blueprint.levels;
  }
}

// Enemy Class extending base Entity
export class Enemy extends Entity {
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
