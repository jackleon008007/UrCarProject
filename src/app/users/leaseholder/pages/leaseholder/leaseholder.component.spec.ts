import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaseholderComponent } from './leaseholder.component';

describe('ArrendatariosComponent', () => {
  let component: LeaseholderComponent;
  let fixture: ComponentFixture<LeaseholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaseholderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaseholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
