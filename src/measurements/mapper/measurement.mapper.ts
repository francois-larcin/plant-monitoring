import { MeasurementResponseDto } from '../dto/measurement-reponse.dto';
import { Measurement } from '../schemas/measurement.schema';

export class MeasurementMapper {
  //? Convert a MongoDB document into DTO for Angular

  static toResponseDto(measurement: Measurement): MeasurementResponseDto {
    return {
      plantId: measurement.plantId,
      timestamp: measurement.createdAt.toISOString(),

      soilMoisture: {
        value: measurement.soilMoisture.value,
        unit: measurement.soilMoisture.unit,
        status: this.calculateSoilMoistureStatus(
          measurement.soilMoisture.value,
        ),
      },

      temperature: {
        value: measurement.temperature.value,
        unit: measurement.temperature.unit,
      },

      humidity: {
        value: measurement.humidity.value,
        unit: measurement.humidity.unit,
      },

      light: {
        value: measurement.light.value,
        unit: measurement.light.unit,
        status: this.calculateLightStatus(measurement.light.value),
      },

      waterPump: {
        isActive: measurement.waterPump.isActive,
        lastRun: measurement.createdAt.toISOString(),
        autoMode: measurement.waterPump.autoMode,
      },
    };
  }

  //* Convert several measures
  static toResponseDtoArray(
    measurements: Measurement[],
  ): MeasurementResponseDto[] {
    return measurements.map((m) => this.toResponseDto(m));
  }

  //* Logique métier
  private static calculateSoilMoistureStatus(value: number): string {
    //? Analogic sensor values (0-4095 for ESP32)
    if (value < 1500) return 'low';
    if (value < 2500) return 'medium';
    return 'high';
  }

  private static calculateLightStatus(value: number): string {
    //? Values for light sensor
    if (value < 500) return 'low';
    if (value < 2000) return 'ok';
    return 'high';
  }
}
