import {Component, inject} from '@angular/core';
import {WeaponListItem} from '../weapon-list-item/weapon-list-item';
import {WeaponService} from '../services/weapon-service';

@Component({
  imports: [
    WeaponListItem
  ],
  selector: 'app-weapon-list',
  styleUrl: './weapon-list.css',
  templateUrl: './weapon-list.html',
})
export class WeaponList {
  //want service
  private weaponService = inject(WeaponService);

  //want list
  weaponList = this.weaponService.weaponList;

  //other list
  specialWeaponList = this.weaponService.weaponsWithSpecial;

  //also the number of special weapons
  numSpecials = this.weaponService.numSpecials;
}
