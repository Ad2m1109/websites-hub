import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MrGrammer } from './mr-grammer';

describe('MrGrammer', () => {
  let component: MrGrammer;
  let fixture: ComponentFixture<MrGrammer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MrGrammer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MrGrammer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
