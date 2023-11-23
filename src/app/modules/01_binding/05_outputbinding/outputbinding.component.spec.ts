import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputbindingComponent } from './outputbinding.component';

describe('OutputbindingComponent', () => {
  let component: OutputbindingComponent;
  let fixture: ComponentFixture<OutputbindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutputbindingComponent]
    });
    fixture = TestBed.createComponent(OutputbindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
