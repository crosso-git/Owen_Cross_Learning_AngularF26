import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeaponListItem } from './weapon-list-item';

describe('WeaponListItem', () => {
  let component: WeaponListItem;
  let fixture: ComponentFixture<WeaponListItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeaponListItem],
    }).compileComponents();

    fixture = TestBed.createComponent(WeaponListItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
