import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramaticallyComponent } from './programatically.component';

describe('ProgramaticallyComponent', () => {
  let component: ProgramaticallyComponent;
  let fixture: ComponentFixture<ProgramaticallyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgramaticallyComponent]
    });
    fixture = TestBed.createComponent(ProgramaticallyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
