import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentSideBarComponent } from './parent-side-bar.component';

describe('ParentSideBarComponent', () => {
  let component: ParentSideBarComponent;
  let fixture: ComponentFixture<ParentSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentSideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
