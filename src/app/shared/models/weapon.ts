export interface Weapon {
  id: number;
  name: string;
  kind: string;
  rarity: number | string;
  damage: number;
  special?: string;
  sharpness?: number;
  affinity: number;
  series: string;
} q
