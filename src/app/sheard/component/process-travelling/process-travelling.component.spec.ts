import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessTravellingComponent } from './process-travelling.component';

describe('ProcessTravellingComponent', () => {
  let component: ProcessTravellingComponent;
  let fixture: ComponentFixture<ProcessTravellingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessTravellingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessTravellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
