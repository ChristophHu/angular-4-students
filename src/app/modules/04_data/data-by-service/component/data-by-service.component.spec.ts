import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataByServiceComponent } from './data-by-service.component';

describe('DataByServiceComponent', () => {
  let component: DataByServiceComponent;
  let fixture: ComponentFixture<DataByServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataByServiceComponent]
    });
    fixture = TestBed.createComponent(DataByServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
