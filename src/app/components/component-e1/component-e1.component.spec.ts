import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentE1Component } from './component-e1.component';

describe('ComponentE1Component', () => {
  let component: ComponentE1Component;
  let fixture: ComponentFixture<ComponentE1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentE1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentE1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
