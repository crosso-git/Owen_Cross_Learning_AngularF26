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

  //yes i did just move the list i made last assignment in here, sue me.
  weaponList: Weapon[] = [
    {id: 1, name: 'Keen Edge', kind: 'long-sword', rarity: 8, damage: 726, affinity: 0, series: 'Ore Tree', image: '../shared/images/600px-MHWilds-Keen_Edge_Render_001.webp'},
    {id: 2, name: 'Windclaw Blade II', kind: 'long-sword', rarity: 5, damage: 561, special: 'Ice', affinity: 0, series: 'Hirabami Tree', image: '../shared/images/MHWilds-Windclaw_Kiribami_Render_001.webp'},
    {id: 3, name: 'Hope Blade II', kind: 'great-sword', rarity: 1, damage: 480, affinity: 0, series: 'Expedition Tree', image: '../shared/images/MHWilds-Esperanza_Blade_Render_001.webp'},
    {id: 4, name: 'Valkyrie Fire I', kind: 'light-bowgun', rarity: 5, damage: 208, affinity: 15, series: 'Rathian Tree', image: '../shared/images/MHWilds-Valkyrie_Fire_Render_001.webp'},
    {id: 5, name: 'G. Veldian Hasta II', kind: 'gunlance', rarity: 6, damage: 483, special: 'Dragon', affinity: -10, series: 'G. Arkveld Tree', image: '../shared/images/MHWilds-G._Lawful_Bors_Render_001.webp'},
    {id: 6, name: 'Zoh Mikal I', kind: 'sword-and-shield', rarity: 'Purple', damage: 294, special: 'Dragon', affinity: 5, series: 'Zoh Shia Tree', image: '../shared/images/MHWilds-Blazing_Mikal_Render_001.webp'}
  ];

}
