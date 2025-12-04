import { Plant } from '../models/interfaces/plant-interface';
import { mockPlantMeasurements } from './plant-measurement-data';

export const MOCK_PLANTS: Plant[] = [
  {
    id: 'basilic-01',
    name: 'Basilic',
    species: 'Ocimum basilicum',
    imageUrl: 'plants-image/basilic.webp',
    lastMeasurement: mockPlantMeasurements[mockPlantMeasurements.length - 3],
  },
  {
    id: 'menthe-02',
    name: 'Menthe',
    species: 'Mentha',
    imageUrl: 'plants-image/menthe.jpg',
    lastMeasurement: mockPlantMeasurements[mockPlantMeasurements.length - 2],
  },
  {
    id: 'romarin-03',
    name: 'romarin',
    species: 'romarinus',
    imageUrl: 'plants-image/romarin.jpg',
    lastMeasurement: mockPlantMeasurements[mockPlantMeasurements.length - 1],
  },
];
