import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveApplicationComponent } from './leave-application.component';

describe('LeaveApplicationComponent', () => {
  let component: LeaveApplicationComponent;
  let fixture: ComponentFixture<LeaveApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
