import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipTabsComponent } from './tooltip-tabs.component';

describe('TooltipTabsComponent', () => {
  let component: TooltipTabsComponent;
  let fixture: ComponentFixture<TooltipTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooltipTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
