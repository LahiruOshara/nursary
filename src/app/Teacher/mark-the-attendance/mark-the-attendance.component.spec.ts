import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkTheAttendanceComponent } from './mark-the-attendance.component';

describe('MarkTheAttendanceComponent', () => {
  let component: MarkTheAttendanceComponent;
  let fixture: ComponentFixture<MarkTheAttendanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkTheAttendanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkTheAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
