import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeltkarteComponent } from './weltkarte.component';

describe('WeltkarteComponent', () => {
  let component: WeltkarteComponent;
  let fixture: ComponentFixture<WeltkarteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeltkarteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeltkarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
