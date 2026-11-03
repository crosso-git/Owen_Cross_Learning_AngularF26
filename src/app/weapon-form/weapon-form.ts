import {Component, inject} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {WeaponService} from '../services/weapon-service';

@Component({
  imports: [
    ReactiveFormsModule
  ],
  selector: 'app-weapon-form',
  styleUrl: './weapon-form.css',
  templateUrl: './weapon-form.html',
})
export class WeaponForm {
  private service = inject(WeaponService);
  private form = inject(FormBuilder);

  weaponForm = this.form.group({
    name: ['', Validators.required],
    kind: ['', Validators.required],
    rarity: ['', Validators.required, Validators.maxLength(1)],
    damage: ['', Validators.required],
    special: [''],
    affinity: ['', Validators.required, Validators.maxLength(3)],
    series: ['', Validators.required],
    image: ['']
  });

  onSubmit(): void {
    if (this.weaponForm.invalid) return;

    const value = this.weaponForm.getRawValue();

    //weird workarounds going on here
    this.service.add({id: Date.now(),
      name: String(value.name),
      kind: String(value.kind),
      rarity: Number(value.rarity),
      damage: Number(value.damage),
      special: String(value.special),
      affinity: Number(value.affinity),
      series: String(value.series)
    });
    this.weaponForm.reset();
  }
}
