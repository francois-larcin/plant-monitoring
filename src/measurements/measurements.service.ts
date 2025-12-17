import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Measurement, MeasurementDocument } from './schemas/measurement.schema';
import { Model } from 'mongoose';
import { CreateMeasurementsDto } from './dto/create-measurement.dto';

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
    CreateMeasurementsDto: CreateMeasurementsDto,
  ): Promise<Measurement> {
    //? Create a new intance of the model with data
    const createMeasurement = new this.measurementModel(CreateMeasurementsDto);
    //? Save into MongoDB
    return createMeasurement.save();
  }

  //* Get ALL the measurements
  async findAll(): Promise<Measurement[]> {
    return this.measurementModel
      .find() //Find all the elements
      .sort({ createdAt: -1 }) //decreasing date (most recent to oldest)
      .limit(100)
      .exec(); //Execute the request
  }

  //* Get the measurements from 1 plant
  async findByPlantId(plantId: string): Promise<Measurement[]> {
    return this.measurementModel
      .find({ plantId })
      .sort({
        createdAt: -1,
      })
      .limit(50)
      .exec();
  }

  //* Get the last measurements from 1 plant
  async findLatestByPlantId(plantId: string): Promise<Measurement | null> {
    return this.measurementModel
      .findOne({ plantId }) // Find one single element
      .sort({ createdAt: -1 })
      .exec();
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
