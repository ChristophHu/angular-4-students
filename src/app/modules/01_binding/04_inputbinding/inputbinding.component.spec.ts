import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputbindingComponent } from './inputbinding.component';

describe('InputbindingComponent', () => {
  let component: InputbindingComponent;
  let fixture: ComponentFixture<InputbindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputbindingComponent]
    });
    fixture = TestBed.createComponent(InputbindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
