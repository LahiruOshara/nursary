import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViweTeacherComponent } from './viwe-teacher.component';

describe('ViweTeacherComponent', () => {
  let component: ViweTeacherComponent;
  let fixture: ComponentFixture<ViweTeacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViweTeacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViweTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
