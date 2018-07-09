import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetStudentComponent } from './get-student.component';

describe('GetStudentComponent', () => {
  let component: GetStudentComponent;
  let fixture: ComponentFixture<GetStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
