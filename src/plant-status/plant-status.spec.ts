import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantStatus } from './plant-status';

describe('PlantStatus', () => {
  let component: PlantStatus;
  let fixture: ComponentFixture<PlantStatus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlantStatus]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantStatus);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
