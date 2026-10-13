import { TestBed } from '@angular/core/testing';
import MockWeaponService from './mock-weapon-service';

describe('MockWeaponService', () => {
  let service: MockWeaponService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockWeaponService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
