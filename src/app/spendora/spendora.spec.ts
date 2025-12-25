import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Spendora } from './spendora';

describe('Spendora', () => {
  let component: Spendora;
  let fixture: ComponentFixture<Spendora>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Spendora]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Spendora);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
