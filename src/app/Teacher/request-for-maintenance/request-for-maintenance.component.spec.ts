import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestForMaintenanceComponent } from './request-for-maintenance.component';

describe('RequestForMaintenanceComponent', () => {
  let component: RequestForMaintenanceComponent;
  let fixture: ComponentFixture<RequestForMaintenanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestForMaintenanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestForMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
