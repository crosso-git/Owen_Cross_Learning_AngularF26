import {Component, input, output} from '@angular/core';
import {Weapon} from '../shared/models/weapon';

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

  toggle(): void {
    this.expanded = !this.expanded;
    this.opened.emit(this.weapon().id);
  }
  //ok actually screw this output whatever crap it's not working and i can't figure out why so i'm not doing it right now
}
