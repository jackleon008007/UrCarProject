import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationAComponent } from './configuration-a.component';

describe('ConfigurationAComponent', () => {
  let component: ConfigurationAComponent;
  let fixture: ComponentFixture<ConfigurationAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigurationAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurationAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
