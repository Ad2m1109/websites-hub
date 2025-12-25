import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaliforniaHousingPrice } from './california-housing-price';

describe('CaliforniaHousingPrice', () => {
  let component: CaliforniaHousingPrice;
  let fixture: ComponentFixture<CaliforniaHousingPrice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaliforniaHousingPrice]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaliforniaHousingPrice);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
