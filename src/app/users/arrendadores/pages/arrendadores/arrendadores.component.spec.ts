import { ComponentFixture, TestBed } from '@angular/core/testing';
import {MatGridListModule} from '@angular/material/grid-list';
import { ArrendadoresComponent } from './arrendadores.component';

describe('ArrendadoresComponent', () => {
  let component: ArrendadoresComponent;
  let fixture: ComponentFixture<ArrendadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrendadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrendadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
