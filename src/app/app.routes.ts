import { Routes } from '@angular/router';
import {WeaponList} from './weapon-list/weapon-list';
import {WeaponDetail} from './weapon-detail/weapon-detail';
import {WeaponForm} from './weapon-form/weapon-form';
import {PageNotFound} from './page-not-found/page-not-found';

export const routes: Routes = [
  {path: '', redirectTo: '/weapons', pathMatch: 'full'},
  {path: 'weapons', component: WeaponList},
  {path: 'weapons/add', component: WeaponForm},
  {path: 'weapons/:id',  component: WeaponDetail},
  {path: 'weapons/edit/:id', component: WeaponForm},
  {path: '**', component: PageNotFound}
];
