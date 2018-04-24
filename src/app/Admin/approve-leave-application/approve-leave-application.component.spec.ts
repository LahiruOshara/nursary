import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveLeaveApplicationComponent } from './approve-leave-application.component';

describe('ApproveLeaveApplicationComponent', () => {
  let component: ApproveLeaveApplicationComponent;
  let fixture: ComponentFixture<ApproveLeaveApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveLeaveApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveLeaveApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
