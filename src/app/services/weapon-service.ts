import {computed, effect, inject, Service, signal} from '@angular/core';
import {Weapon} from '../shared/models/weapon';
import {APP_CONFIG} from '../shared/interface/app-config';
import {httpResource} from '@angular/common/http';

@Service()
export class WeaponService {
  //want configs
  private config = inject(APP_CONFIG);

  //config values for reading
  configApi = signal<string>(this.config.apiBaseUrl).asReadonly();
  configDefaultKind = signal<string>(this.config.defaultKind).asReadonly();

  private contentResource = httpResource<Weapon[]>(() => ({
    url: `${this.config.apiBaseUrl}/weapons`,
    params: { limit: 20 }
  }), { defaultValue: [] });

  private weapons = this.contentResource.value;

  weaponList = computed(() =>
    this.contentResource.error() ? [] : this.weapons());

  isLoading = this.contentResource.isLoading;
  error = this.contentResource.error;

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
      () => {console.log('list now has ' + this.weapons().length + ' items.')}
    );
  }
}
