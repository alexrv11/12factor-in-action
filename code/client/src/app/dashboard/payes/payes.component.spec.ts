import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayesComponent } from './payes.component';

describe('PayesComponent', () => {
  let component: PayesComponent;
  let fixture: ComponentFixture<PayesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
