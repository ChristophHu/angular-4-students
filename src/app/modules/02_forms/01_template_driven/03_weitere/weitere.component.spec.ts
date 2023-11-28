import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeitereComponent } from './weitere.component';

describe('WeitereComponent', () => {
  let component: WeitereComponent;
  let fixture: ComponentFixture<WeitereComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeitereComponent]
    });
    fixture = TestBed.createComponent(WeitereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
