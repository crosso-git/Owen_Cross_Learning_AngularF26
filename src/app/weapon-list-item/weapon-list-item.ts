import {Component, inject, input, output} from '@angular/core';
import {Weapon} from '../shared/models/weapon';
import {WeaponService} from '../services/weapon-service';

@Component({
  imports: [],
  selector: 'app-weapon-list-item',
  styleUrl: './weapon-list-item.css',
  templateUrl: './weapon-list-item.html',
})
export class WeaponListItem {
  weapon = input.required<Weapon>();
  expanded = false;
  opened = output<number>();

  //WANT SERVICE
  private weaponService = inject(WeaponService);

  //Toggles what is visible and also emits the id of what gets opened/closed
  toggle(): void {
    this.expanded = !this.expanded;
    this.opened.emit(this.weapon().id);
  }

  //button
  removeItem(id: number) {
    this.weaponService.remove(id);
  }
}
