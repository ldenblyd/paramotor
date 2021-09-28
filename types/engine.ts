export enum StarterEnum {
  MANUAL,
  ELECTRIC,
  DUAL,
}

export enum ClutchEnum {
  WITH,
  WITOUT,
  CHOOSE,
}

interface PowerEngine {
  hp: number;
  rpm: number;
}

interface ConsumptionEngine {
  litter: number;
  thrust: number;
}

interface StarterEngine {
  name: StarterEnum;
  weight: number;
}

export interface Engine {
  id: string;
  brand: string;
  model: string;
  category: string;
  cylinderVolume: number;
  description?: string;
  imageUrl?: string;
  pdf?: string;
  reduction?: number[];
  power?: PowerEngine;
  consumption?: ConsumptionEngine;
  clutch?: ClutchEnum;
  starter?: StarterEngine[];
}
