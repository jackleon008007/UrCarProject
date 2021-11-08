import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatingPostComponent } from './creating-post.component';

describe('CreatingPostComponent', () => {
  let component: CreatingPostComponent;
  let fixture: ComponentFixture<CreatingPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatingPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatingPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
