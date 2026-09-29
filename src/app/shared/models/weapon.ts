export interface Weapon {
  id: number;
  name: string;
  kind: string;
  rarity: number | string;
  damage: number;
  special?: string;
  affinity: number;
  series: string;
  //specifies the file route to image
  image: string;
}
