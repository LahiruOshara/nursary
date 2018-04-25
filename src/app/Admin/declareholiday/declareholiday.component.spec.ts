import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclareholidayComponent } from './declareholiday.component';

describe('DeclareholidayComponent', () => {
  let component: DeclareholidayComponent;
  let fixture: ComponentFixture<DeclareholidayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeclareholidayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclareholidayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
