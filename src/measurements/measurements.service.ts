import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Measurement, MeasurementDocument } from './schemas/measurement.schema';
import { Model } from 'mongoose';
import { CreateMeasurementsDto } from './dto/create-measurement.dto';
import { MeasurementResponseDto } from './dto/measurement-reponse.dto';
import { MeasurementMapper } from './mapper/measurement.mapper';

//? Can be injected in other classes
@Injectable()
export class MeasurementsService {
  //? Mongoose model injection
  constructor(
    @InjectModel(Measurement.name)
    private measurementModel: Model<MeasurementDocument>,
  ) {}

  //* Create a measure (used by ESP32)
  async create(
    createMeasurementDto: CreateMeasurementsDto,
  ): Promise<MeasurementResponseDto> {
    //? Create a new intance of the model with data
    const createdMeasurement = new this.measurementModel(createMeasurementDto);
    const saved = await createdMeasurement.save();

    //? Map before return
    return MeasurementMapper.toResponseDto(saved);
  }

  //* Get ALL the measurements
  async findAll(): Promise<MeasurementResponseDto[]> {
    const measurements = await this.measurementModel
      .find() //Find all the elements
      .sort({ createdAt: -1 }) //decreasing date (most recent to oldest)
      .limit(100)
      .exec(); //Execute the request

    return MeasurementMapper.toResponseDtoArray(measurements);
  }

  //* Get the measurements from 1 plant
  async findByPlantId(plantId: string): Promise<MeasurementResponseDto[]> {
    const measurements = await this.measurementModel
      .find({ plantId })
      .sort({
        createdAt: -1,
      })
      .limit(50)
      .exec();

    return MeasurementMapper.toResponseDtoArray(measurements);
  }

  //* Get the last measurements from 1 plant
  async findLatestByPlantId(
    plantId: string,
  ): Promise<MeasurementResponseDto | null> {
    const measurement = await this.measurementModel
      .findOne({ plantId }) // Find one single element
      .sort({ createdAt: -1 })
      .exec();

    return measurement ? MeasurementMapper.toResponseDto(measurement) : null;
  }

  //* Get all the plants IDs
  async findAllPlantIds(): Promise<string[]> {
    //Return only the plants' ids list
    return this.measurementModel.distinct('plantId').exec();
  }

  async deleteOldMeasurements(daysOld: number = 30): Promise<number> {
    const date = new Date();
    date.setDate(date.getDate() - daysOld); // Date from x days ago

    const result = await this.measurementModel
      .deleteMany({
        createdAt: { $lt: date }, //$lt = less than
      })
      .exec();

    return result.deletedCount; //Number of deleted elements
  }
}
