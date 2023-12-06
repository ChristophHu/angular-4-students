import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Proute02Component } from './proute02.component';

describe('Proute02Component', () => {
  let component: Proute02Component;
  let fixture: ComponentFixture<Proute02Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Proute02Component]
    });
    fixture = TestBed.createComponent(Proute02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
