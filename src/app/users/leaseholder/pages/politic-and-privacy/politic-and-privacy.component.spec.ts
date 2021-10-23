import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticAndPrivacyComponent } from './politic-and-privacy.component';

describe('PoliticAndPrivacyComponent', () => {
  let component: PoliticAndPrivacyComponent;
  let fixture: ComponentFixture<PoliticAndPrivacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoliticAndPrivacyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticAndPrivacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
