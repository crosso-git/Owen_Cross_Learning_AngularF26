import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Weapon } from './shared/models/weapon';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Owen-Cross-Learning-AngularF26');

  weaponList: Weapon[] = [
    {id: 1, name: 'Keen Edge', kind: 'long-sword', rarity: 8, damage: 726, affinity: 0, series: 'Ore Tree'},
    {id: 2, name: 'Windclaw Blade II', kind: 'long-sword', rarity: 5, damage: 561, special: 'ice', affinity: 0, series: 'Hirabami Tree'},
    {id: 3, name: 'Hope Blade II', kind: 'great-sword', rarity: 1, damage: 480, affinity: 0, series: 'Expedition Tree'},
    {id: 4, name: 'Valkyrie Fire I', kind: 'light-bowgun', rarity: 5, damage: 208, affinity: 15, series: 'Rathian Tree'},
    {id: 5, name: 'G. Veldian Hasta II', kind: 'gunlance', rarity: 6, damage: 483, special: 'dragon', affinity: -10, series: 'G. Arkveld Tree'},
    {id: 6, name: 'Zoh Mikal I', kind: 'sword-and-shield', rarity: 'Purple', damage: 294, special: 'dragon', affinity: 5, series: 'Zoh Shia Tree'}
  ];
}
