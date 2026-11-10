import {Component, inject, input} from '@angular/core';
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

  id = input.required<string>();

  weaponForm = this.form.group({
    name: ['', Validators.required],
    kind: ['', Validators.required],
    rarity: ['', Validators.required, Validators.maxLength(1)],
    rawDamage: ['', Validators.required],
    displayDamage: ['', Validators.required],
    nameSpecial: [''],
    kindSpecial: [''],
    specialRawDamage: [''],
    specialDisplayDamage: [''],
    affinity: ['', Validators.required, Validators.maxLength(3)],
    series: ['', Validators.required],
    image: ['']
  });

  /**
   * TODO setup a constructor and use exceptions to try to cast to a num and to
   * look up if its a valid id.
   *
   * I do the same thing in my file
   */

  onSubmit(): void {
    if (this.weaponForm.invalid) return;

    const value = this.weaponForm.getRawValue();

    //weird workarounds going on here
    this.service.add({id: Date.now(),
      name: String(value.name),
      kind: String(value.kind),
      rarity: Number(value.rarity),
      damage: { raw : Number(value.rawDamage), display : Number(value.displayDamage) },
      special: [ String(value.nameSpecial), String(value.kindSpecial),
        { raw : Number(value.specialRawDamage), display : Number(value.specialDisplayDamage) }],
      affinity: Number(value.affinity),
      series: { name: String(value.series) }
    });
    this.weaponForm.reset();
  }
}
