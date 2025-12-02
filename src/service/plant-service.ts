import { Injectable } from '@angular/core';
import { Plant } from '../models/interfaces/plant-interface';
import { mockPlantMeasurements } from '../assets/plant-data';

@Injectable({
  providedIn: 'root',
})
export class PlantService {
  getAll(): Plant[] {
    return mockPlantMeasurements;
  }
}
