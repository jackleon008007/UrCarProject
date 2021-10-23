import { ComponentFixture, TestBed } from '@angular/core/testing';
import {MatGridListModule} from '@angular/material/grid-list';
import { LessorsComponent } from './lessors.component';

describe('ArrendadoresComponent', () => {
  let component: LessorsComponent;
  let fixture: ComponentFixture<LessorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LessorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
