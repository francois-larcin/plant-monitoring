import { LightStatus } from '../models/enums/light-status-enum';
import { SoilMoistureStatus } from '../models/enums/soil-moisture-status-enum';

export const mockPlantMeasurements = [
  // 🌱 Jour 1 - 2025-11-15
  {
    plantId: 'basilic-01',
    timestamp: '2025-11-15T08:00:00Z',
    soilMoisture: { value: 58, unit: '%', status: SoilMoistureStatus.Medium },
    temperature: { value: 22.5, unit: '°C' },
    humidity: { value: 45, unit: '%' },
    light: { value: 735, unit: 'lux', status: LightStatus.Ok },
    waterPump: {
      isActive: false,
      lastRun: '2025-11-15T06:30:00Z',
      autoMode: true,
    },
    battery: { value: 87, unit: '%' },
  },
  {
    plantId: 'menthe-02',
    timestamp: '2025-11-15T12:00:00Z',
    soilMoisture: { value: 72, unit: '%', status: SoilMoistureStatus.High },
    temperature: { value: 24.1, unit: '°C' },
    humidity: { value: 50, unit: '%' },
    light: { value: 820, unit: 'lux', status: LightStatus.Ok },
    waterPump: {
      isActive: true,
      lastRun: '2025-11-15T11:45:00Z',
      autoMode: true,
    },
    battery: { value: 83, unit: '%' },
  },
  {
    plantId: 'romarin-03',
    timestamp: '2025-11-15T16:00:00Z',
    soilMoisture: { value: 39, unit: '%', status: SoilMoistureStatus.Low },
    temperature: { value: 21.0, unit: '°C' },
    humidity: { value: 42, unit: '%' },
    light: { value: 690, unit: 'lux', status: LightStatus.Low },
    waterPump: {
      isActive: false,
      lastRun: '2025-11-15T13:00:00Z',
      autoMode: false,
    },
    battery: { value: 78, unit: '%' },
  },

  // 🌿 Jour 2 - 2025-11-16
  {
    plantId: 'basilic-01',
    timestamp: '2025-11-16T08:00:00Z',
    soilMoisture: { value: 55, unit: '%', status: SoilMoistureStatus.Medium },
    temperature: { value: 21.8, unit: '°C' },
    humidity: { value: 47, unit: '%' },
    light: { value: 710, unit: 'lux', status: LightStatus.Ok },
    waterPump: {
      isActive: false,
      lastRun: '2025-11-16T07:00:00Z',
      autoMode: true,
    },
    battery: { value: 85, unit: '%' },
  },
  {
    plantId: 'menthe-02',
    timestamp: '2025-11-16T12:00:00Z',
    soilMoisture: { value: 68, unit: '%', status: SoilMoistureStatus.High },
    temperature: { value: 23.5, unit: '°C' },
    humidity: { value: 52, unit: '%' },
    light: { value: 800, unit: 'lux', status: LightStatus.Ok },
    waterPump: {
      isActive: false,
      lastRun: '2025-11-16T10:45:00Z',
      autoMode: true,
    },
    battery: { value: 81, unit: '%' },
  },
  {
    plantId: 'romarin-03',
    timestamp: '2025-11-16T16:00:00Z',
    soilMoisture: { value: 42, unit: '%', status: SoilMoistureStatus.Medium },
    temperature: { value: 20.5, unit: '°C' },
    humidity: { value: 40, unit: '%' },
    light: { value: 670, unit: 'lux', status: LightStatus.Low },
    waterPump: {
      isActive: false,
      lastRun: '2025-11-16T14:00:00Z',
      autoMode: false,
    },
    battery: { value: 76, unit: '%' },
  },

  // 🌼 Jour 3 - 2025-11-17
  {
    plantId: 'basilic-01',
    timestamp: '2025-11-17T08:00:00Z',
    soilMoisture: { value: 52, unit: '%', status: SoilMoistureStatus.Medium },
    temperature: { value: 22.0, unit: '°C' },
    humidity: { value: 46, unit: '%' },
    light: { value: 740, unit: 'lux', status: LightStatus.Ok },
    waterPump: {
      isActive: false,
      lastRun: '2025-11-17T06:45:00Z',
      autoMode: true,
    },
    battery: { value: 82, unit: '%' },
  },
  {
    plantId: 'menthe-02',
    timestamp: '2025-11-17T12:00:00Z',
    soilMoisture: { value: 65, unit: '%', status: SoilMoistureStatus.Medium },
    temperature: { value: 23.0, unit: '°C' },
    humidity: { value: 49, unit: '%' },
    light: { value: 810, unit: 'lux', status: LightStatus.Ok },
    waterPump: {
      isActive: false,
      lastRun: '2025-11-17T11:00:00Z',
      autoMode: true,
    },
    battery: { value: 80, unit: '%' },
  },
  {
    plantId: 'romarin-03',
    timestamp: '2025-11-17T16:00:00Z',
    soilMoisture: { value: 40, unit: '%', status: SoilMoistureStatus.Low },
    temperature: { value: 20.0, unit: '°C' },
    humidity: { value: 41, unit: '%' },
    light: { value: 660, unit: 'lux', status: LightStatus.Low },
    waterPump: {
      isActive: false,
      lastRun: '2025-11-17T13:30:00Z',
      autoMode: false,
    },
    battery: { value: 74, unit: '%' },
  },
];
