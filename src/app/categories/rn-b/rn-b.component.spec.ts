import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RnBComponent } from './rn-b.component';

describe('RnBComponent', () => {
  let component: RnBComponent;
  let fixture: ComponentFixture<RnBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RnBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RnBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
