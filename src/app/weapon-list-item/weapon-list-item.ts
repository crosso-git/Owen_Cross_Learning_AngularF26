import {Component, input} from '@angular/core';
import {Weapon} from '../shared/models/weapon';

@Component({
  imports: [],
  selector: 'app-weapon-list-item',
  styleUrl: './weapon-list-item.css',
  templateUrl: './weapon-list-item.html',
})
export class WeaponListItem {
  weapon = input.required<Weapon>();
}
