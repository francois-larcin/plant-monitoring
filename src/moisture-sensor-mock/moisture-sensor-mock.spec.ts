import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoistureSensorMock } from './moisture-sensor-mock';

describe('MoistureSensorMock', () => {
  let component: MoistureSensorMock;
  let fixture: ComponentFixture<MoistureSensorMock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoistureSensorMock]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoistureSensorMock);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
