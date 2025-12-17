import { LightStatus } from '../enums/light-status-enum';
import { SoilMoistureStatus } from '../enums/soil-moisture-status-enum';

export interface PlantMeasurement {
  plantId: string;
  timestamp: string; // ISO 8601 format

  soilMoisture: {
    value: number;
    unit: string;
    status: SoilMoistureStatus;
  };

  temperature: {
    value: number;
    unit: string;
  };

  humidity: {
    value: number;
    unit: string;
  };

  light: {
    value: number;
    unit: string;
    status: LightStatus;
  };

  waterPump: {
    isActive: boolean;
    lastRun: string; // ISO 8601 format
    autoMode: boolean;
  };
}
