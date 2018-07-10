import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckHomeworkComponent } from './check-homework.component';

describe('CheckHomeworkComponent', () => {
  let component: CheckHomeworkComponent;
  let fixture: ComponentFixture<CheckHomeworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckHomeworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckHomeworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
