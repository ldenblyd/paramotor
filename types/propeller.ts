export enum PropellerRotation {
  LEFT,
  RIGHT,
}

// BOLT PATERN
// 6 vis de diamètre 6 mm sur un cercle de diamètre 60 mm avec un trou central de 25 mm

interface BoltPatern {
  amountScrew: number;
  typeScrew: string;
  diameter: number;
  holeDiameter: number;
}

export interface Propeller {
  id: string;
  category: string;
  description: string;
  imageUrl: string;
  link: string;
  brand: string;
  model: string;
  rotation: PropellerRotation;
  diameter: number;
  bladeCount: number;
  boltPatern: BoltPatern;
}
