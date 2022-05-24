import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastsLayoutComponent } from './toasts-layout.component';

describe('ToastsLayoutComponent', () => {
  let component: ToastsLayoutComponent;
  let fixture: ComponentFixture<ToastsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToastsLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
