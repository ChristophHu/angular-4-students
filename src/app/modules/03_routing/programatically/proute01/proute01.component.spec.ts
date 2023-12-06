import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Proute01Component } from './proute01.component';

describe('Proute01Component', () => {
  let component: Proute01Component;
  let fixture: ComponentFixture<Proute01Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Proute01Component]
    });
    fixture = TestBed.createComponent(Proute01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
