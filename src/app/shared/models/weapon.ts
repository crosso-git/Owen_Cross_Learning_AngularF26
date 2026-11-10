export interface Weapon {
  id: number;
  name: string;
  kind: string;
  rarity: number;
  damage: { raw: number,
            display: number};
  special?: [status: string,
              kind: string,
              damage: { raw: number,
                display: number }];
  affinity: number;
  series: { name: string };
  //specifies the file route to image
  image?: string;
}
