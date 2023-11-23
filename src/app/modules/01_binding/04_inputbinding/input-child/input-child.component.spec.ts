import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputClientComponent } from './input-child.component';

describe('InputClientComponent', () => {
  let component: InputClientComponent;
  let fixture: ComponentFixture<InputClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputClientComponent]
    });
    fixture = TestBed.createComponent(InputClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
