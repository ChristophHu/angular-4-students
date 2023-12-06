import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Route02Component } from './route02.component';

describe('Route02Component', () => {
  let component: Route02Component;
  let fixture: ComponentFixture<Route02Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Route02Component]
    });
    fixture = TestBed.createComponent(Route02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
