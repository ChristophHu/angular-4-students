import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Route01Component } from './route01.component';

describe('Route01Component', () => {
  let component: Route01Component;
  let fixture: ComponentFixture<Route01Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Route01Component]
    });
    fixture = TestBed.createComponent(Route01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
