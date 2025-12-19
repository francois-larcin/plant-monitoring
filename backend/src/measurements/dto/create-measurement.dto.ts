import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';

//Class to validate a sensor object (value + unit)
class SensorValue {
  @IsNumber()
  value: number;

  @IsString()
  unit: string;
}

class WaterPump {
  @IsBoolean()
  isActive: boolean;

  @IsBoolean()
  autoMode: boolean;
}

//? main DTO = expected structure from this ESP32

export class CreateMeasurementsDto {
  @IsString()
  @IsNotEmpty()
  plantId: string;

  @ValidateNested() // Valide l'objet imbriqué
  @Type(() => SensorValue) //? Transform into SensorValue instance
  soilMoisture: SensorValue;

  @ValidateNested()
  @Type(() => SensorValue)
  temperature: SensorValue;

  @ValidateNested()
  @Type(() => SensorValue)
  humidity: SensorValue;

  @ValidateNested()
  @Type(() => SensorValue)
  light: SensorValue;

  @ValidateNested()
  @Type(() => WaterPump)
  waterPump: WaterPump;
}
