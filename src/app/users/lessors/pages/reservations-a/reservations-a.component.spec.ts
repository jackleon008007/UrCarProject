import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationsAComponent } from './reservations-a.component';

describe('ReservationsAComponent', () => {
  let component: ReservationsAComponent;
  let fixture: ComponentFixture<ReservationsAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationsAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationsAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
