import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeaponForm } from './weapon-form';

describe('WeaponForm', () => {
  let component: WeaponForm;
  let fixture: ComponentFixture<WeaponForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeaponForm],
    }).compileComponents();

    fixture = TestBed.createComponent(WeaponForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
