export enum Sizes {
  S,
  M,
  L,
  XL,
  ALL,
}

interface MinMax {
  min: number;
  max: number;
}

interface SizeSeat {
  value: Sizes[];
  weight: number;
  height: MinMax;
}

export interface Seat {
  id: string;
  category: string;
  description: string;
  imageUrl: string;
  pdf: string;
  brand: string;
  model: string;
  weight: number;
  size: SizeSeat[];
}
