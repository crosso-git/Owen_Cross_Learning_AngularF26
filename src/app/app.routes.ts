import { Routes } from '@angular/router';
import {WeaponList} from './weapon-list/weapon-list';
import {WeaponDetail} from './weapon-detail/weapon-detail';

export const routes: Routes = [
  {path: '', redirectTo: '/weapons', pathMatch: 'full'},
  {path: 'weapons', component: WeaponList},
  {path: 'weapons/:id',  component: WeaponDetail},
];
