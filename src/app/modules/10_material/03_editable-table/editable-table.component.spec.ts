import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableTableComponent } from './editable-table.component';

describe('EditableTableComponent', () => {
  let component: EditableTableComponent;
  let fixture: ComponentFixture<EditableTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditableTableComponent]
    });
    fixture = TestBed.createComponent(EditableTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
