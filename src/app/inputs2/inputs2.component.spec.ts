import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Inputs2Component } from './inputs2.component';

describe('Inputs2Component', () => {
  let component: Inputs2Component;
  let fixture: ComponentFixture<Inputs2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Inputs2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Inputs2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
