import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageAComponent } from './message-a.component';

describe('MessageAComponent', () => {
  let component: MessageAComponent;
  let fixture: ComponentFixture<MessageAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
