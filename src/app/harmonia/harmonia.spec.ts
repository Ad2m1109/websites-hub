import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Harmonia } from './harmonia';

describe('Harmonia', () => {
  let component: Harmonia;
  let fixture: ComponentFixture<Harmonia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Harmonia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Harmonia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
