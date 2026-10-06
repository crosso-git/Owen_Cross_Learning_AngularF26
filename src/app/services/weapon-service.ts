import {computed, effect, Service, signal} from '@angular/core';
import {Weapon} from '../shared/models/weapon';

@Service()
export class WeaponService {
  private weapons = signal<Weapon[]>([
    {id: 1, name: 'Keen Edge', kind: 'long-sword', rarity: 8, damage: 726, affinity: 0, series: 'Ore Tree', image: './assets/MHWilds-Keen_Edge_Render_001.webp'},
    {id: 2, name: 'Windclaw Blade II', kind: 'long-sword', rarity: 5, damage: 561, special: 'Ice', affinity: 0, series: 'Hirabami Tree', image: './assets/MHWilds-Windclaw_Kiribami_Render_001.webp'},
    {id: 3, name: 'Hope Blade II', kind: 'great-sword', rarity: 1, damage: 480, affinity: 0, series: 'Expedition Tree', image: './assets/MHWilds-Esperanza_Blade_Render_001.webp'},
    {id: 4, name: 'Valkyrie Fire I', kind: 'light-bowgun', rarity: 5, damage: 208, affinity: 15, series: 'Rathian Tree', image: './assets/MHWilds-Valkyrie_Fire_Render_001.webp'},
    {id: 5, name: 'G. Veldian Hasta II', kind: 'gunlance', rarity: 6, damage: 483, special: 'Dragon', affinity: -10, series: 'G. Arkveld Tree', image: './assets/MHWilds-G._Lawful_Bors_Render_001.webp'},
    {id: 6, name: 'Zoh Mikal I', kind: 'sword-and-shield', rarity: 'Purple', damage: 294, special: 'Dragon', affinity: 5, series: 'Zoh Shia Tree', image: './assets/MHWilds-Blazing_Mikal_Render_001.webp'},
    {id: 7, name: 'Deafening Fulgur I', kind: 'hunting-horn', rarity: 6, damage: 756, special: 'Thunder', affinity: 15, series: 'G. Fulgur Tree'}
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
      () => {console.log('list now has ' + this.weapons().length + ' items long.')}
    );
  }
}
