import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousingLocationComponent } from './housing-location.component';

describe('HousingLocationComponent', () => {
  let component: HousingLocationComponent;
  let fixture: ComponentFixture<HousingLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HousingLocationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HousingLocationComponent);
    component = fixture.componentInstance;
    component.housingLocation = {
      id: 9999,
      name: 'Test Home',
      city: 'Test city',
      state: 'ST',
      photo: 'https://angular.dev/assets/images/tutorials/common/example-house.jpg',
      availableUnits: 99,
      wifi: true,
      laundry: false,
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
