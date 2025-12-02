import { PlantMeasurement } from './plant-measurement-interface';

export interface Plant {
  id: string;
  name: string;
  species?: string;
  imageUrl?: string;
  lastMeasurement: PlantMeasurement;
}
