import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Charakter } from './charakter';

describe('Charakter', () => {
  let component: Charakter;
  let fixture: ComponentFixture<Charakter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Charakter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Charakter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
