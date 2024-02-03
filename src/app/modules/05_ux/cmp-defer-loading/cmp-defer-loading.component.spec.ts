import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpDeferLoadingComponent } from './cmp-defer-loading.component';

describe('CmpDeferLoadingComponent', () => {
  let component: CmpDeferLoadingComponent;
  let fixture: ComponentFixture<CmpDeferLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CmpDeferLoadingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CmpDeferLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
