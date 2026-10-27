import {Component, computed, inject, input} from '@angular/core';
import {WeaponService} from '../services/weapon-service';
import {Router} from '@angular/router';

@Component({
  imports: [],
  selector: 'app-weapon-detail',
  styleUrl: './weapon-detail.css',
  templateUrl: './weapon-detail.html',
})
export class WeaponDetail {
  //gets ID from the route path
  id = input.required<string>();

  private service = inject(WeaponService);

  //finds matching entry
  weapon = computed(
    () => this.service.weaponList().find(i => i.id === Number(this.id()))
  );

  //go back to the previous page
  private router = inject(Router);
  back(): void {
    this.router.navigate(['/weapons']);
  }
}
