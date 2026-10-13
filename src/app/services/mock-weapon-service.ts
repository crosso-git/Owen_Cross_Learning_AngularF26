import {computed, effect, inject, Service, signal} from '@angular/core';
import {APP_CONFIG} from '../shared/interface/app-config';
import {Weapon} from '../shared/models/weapon';

@Service()
export class MockWeaponService {
  //want configs
  private config = inject(APP_CONFIG);

  //config values for reading
  configApi = signal<string>(this.config.apiBaseUrl).asReadonly();
  configDefaultKind = signal<string>(this.config.defaultKind).asReadonly();

  private weapons = signal<Weapon[]>([
    {
      id: 1,
      name: 'Big Thing',
      kind: 'hammer',
      rarity: 0,
      damage: 9,
      affinity: -5,
      series: 'idk lol'
    },
    {
      id: 2,
      name: 'Less big thing',
      kind: 'dual-blades',
      rarity: 1,
      damage: 3,
      special: 'Fire',
      affinity: 0,
      series: 'Tiny little stabby stabs'
    }
  ]);

  weaponList = this.weapons.asReadonly();

  //I have no idea how I'm supposed to implement this actually adding anything (not specified in assignment)
  add(newWeapon: Weapon): void {
    this.weapons.update(list => [...list, newWeapon]);
  }

  //method that destroys an item (with hammers) (somehow)
  remove(id: number): void {
    this.weapons.update(list => list.filter(x => x.id !== id));
  }

  //and now the filtered computed list thing:
  weaponsWithSpecial = computed(
    () => this.weapons().filter(x => x.special)
  );

  //and ANOTHER computor who counts how many special weapons there are
  numSpecials = computed(
    () => this.weaponsWithSpecial().length
  );

  //and the effect that counts how many things are in the list (I think I need to put this in a constructor???)
  constructor() {
    effect(
      () => {
        console.log('list now has ' + this.weapons().length + ' items.')
      }
    );
  }
}

export default MockWeaponService
