import { Component, signal } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import { WeaponList } from './weapon-list/weapon-list';

@Component({
  imports: [RouterOutlet, WeaponList, RouterLink, RouterLinkActive],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Owen-Cross-Learning-AngularF26');

}
