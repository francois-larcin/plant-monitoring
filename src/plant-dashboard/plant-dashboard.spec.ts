import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantDashboard } from './plant-dashboard';

describe('PlantDashboard', () => {
  let component: PlantDashboard;
  let fixture: ComponentFixture<PlantDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlantDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
