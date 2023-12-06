import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocaldataComponent } from './localdata.component';

describe('LocaldataComponent', () => {
  let component: LocaldataComponent;
  let fixture: ComponentFixture<LocaldataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocaldataComponent]
    });
    fixture = TestBed.createComponent(LocaldataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
