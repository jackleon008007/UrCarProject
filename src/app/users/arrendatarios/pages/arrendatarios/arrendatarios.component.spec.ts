import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrendatariosComponent } from './arrendatarios.component';

describe('ArrendatariosComponent', () => {
  let component: ArrendatariosComponent;
  let fixture: ComponentFixture<ArrendatariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrendatariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrendatariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
