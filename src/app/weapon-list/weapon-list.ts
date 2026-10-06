import { Component } from '@angular/core';
import { Weapon } from '../shared/models/weapon';
import {WeaponListItem} from '../weapon-list-item/weapon-list-item';

@Component({
  imports: [
    WeaponListItem
  ],
  selector: 'app-weapon-list',
  styleUrl: './weapon-list.css',
  templateUrl: './weapon-list.html',
})
export class WeaponList {

}
