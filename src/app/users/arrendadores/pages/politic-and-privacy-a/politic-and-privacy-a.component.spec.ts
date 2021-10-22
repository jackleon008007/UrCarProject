import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticAndPrivacyAComponent } from './politic-and-privacy-a.component';

describe('PoliticAndPrivacyAComponent', () => {
  let component: PoliticAndPrivacyAComponent;
  let fixture: ComponentFixture<PoliticAndPrivacyAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoliticAndPrivacyAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticAndPrivacyAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
