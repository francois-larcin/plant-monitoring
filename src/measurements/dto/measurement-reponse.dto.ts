export class MeasurementResponseDto {
  plantId: string;
  timestamp: string; //ISO 8601 format

  soilMoisture: {
    value: number;
    unit: string;
    status: string;
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
  };

  waterPump: {
    isActive: boolean;
    lastRun: string;
    autoMode: boolean;
  };

  battery?: {
    value: number;
    unit: string;
  };
}
