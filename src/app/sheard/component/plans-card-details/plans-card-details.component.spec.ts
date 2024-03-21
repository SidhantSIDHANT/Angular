import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansCardDetailsComponent } from './plans-card-details.component';

describe('PlansCardDetailsComponent', () => {
  let component: PlansCardDetailsComponent;
  let fixture: ComponentFixture<PlansCardDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlansCardDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlansCardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
