import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MeasurementsService } from './measurements.service';
import { CreateMeasurementsDto } from './dto/create-measurement.dto';

@Controller('measurements')
export class MeasurementsController {
  //? Injection du service
  constructor(private readonly measurementsService: MeasurementsService) {}

  //? Used by ESP32 to send the datas
  @Post()
  async create(@Body() CreateMeasurementsDto: CreateMeasurementsDto) {
    return this.measurementsService.create(CreateMeasurementsDto);
  }

  //? Get all the measurements
  @Get()
  async findAll() {
    return this.measurementsService.findAll();
  }

  //? Get the list of the plants' IDs
  @Get('plants')
  async findAllPlants() {
    return this.measurementsService.findAllPlantIds();
  }

  //? Get all the measurements from 1 plant
  @Get('plant/:plantId')
  async findByPlantId(@Param('plantId') plantId: string) {
    return this.measurementsService.findByPlantId(plantId);
  }

  //? Get the last measurement from a plant
  @Get('plant/:plantId/latest')
  async findLatestByPlantId(@Param('plantId') plantId: string) {
    return this.measurementsService.findLatestByPlantId(plantId);
  }
}
