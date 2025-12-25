import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mp3Mp4Converter } from './mp3-mp4-converter';

describe('Mp3Mp4Converter', () => {
  let component: Mp3Mp4Converter;
  let fixture: ComponentFixture<Mp3Mp4Converter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mp3Mp4Converter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mp3Mp4Converter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
