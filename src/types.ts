export interface Entity {
  name: string;
  mineralCost: number;
  gasCost: number;
  buildTime: number;
  prerequisites: string[];
  producedFrom: string;
}

export interface Unit extends Entity {
  supplyCost: number;
}

export interface Structure extends Entity {}

export interface Upgrade extends Entity {}

export interface EntityData {
  units: Record<string, Unit>;
  structures: Record<string, Structure>;
  upgrades: Record<string, Upgrade>;
}
