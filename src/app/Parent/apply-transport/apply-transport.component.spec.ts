import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyTransportComponent } from './apply-transport.component';

describe('ApplyTransportComponent', () => {
  let component: ApplyTransportComponent;
  let fixture: ComponentFixture<ApplyTransportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyTransportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
