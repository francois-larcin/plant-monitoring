import { Injectable } from '@angular/core';
import { Plant } from '../models/interfaces/plant-interface';
import { mockPlantMeasurements } from '../assets/plant-measurement-data';
import { MOCK_PLANTS } from '../assets/plant-data';
import { PlantMeasurement } from '../models/interfaces/plant-measurement-interface';

@Injectable({
  providedIn: 'root',
})
export class PlantService {
  getAll(): Plant[] {
    return MOCK_PLANTS;
  }

  getById(id: string): Plant | undefined {
    return MOCK_PLANTS.find((p) => p.id === id);
  }

  getMeasurementsByPlantId(plantId: string): PlantMeasurement[] {
    return mockPlantMeasurements
      .filter((m) => m.plantId === plantId)
      .sort(
        (a, b) =>
          new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
      );
  }

  getAllMeasurements(): PlantMeasurement[] {
    return mockPlantMeasurements;
  }
}
