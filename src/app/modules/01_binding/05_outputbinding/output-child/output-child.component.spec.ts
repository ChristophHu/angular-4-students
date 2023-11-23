import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputClientComponent } from './output-child.component';

describe('OutputClientComponent', () => {
  let component: OutputClientComponent;
  let fixture: ComponentFixture<OutputClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutputClientComponent]
    });
    fixture = TestBed.createComponent(OutputClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
