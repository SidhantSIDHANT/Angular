import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuiInputComponent } from './tui-input.component';

describe('TuiInputComponent', () => {
  let component: TuiInputComponent;
  let fixture: ComponentFixture<TuiInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TuiInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TuiInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
