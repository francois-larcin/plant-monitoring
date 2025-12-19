import { Module } from '@nestjs/common';
import { MeasurementsService } from './measurements.service';
import { MeasurementsController } from './measurements.controller';
import { Measurement, MeasurementSchema } from './schemas/measurement.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    //? Save the Mongoose schema in this module
    MongooseModule.forFeature([
      { name: Measurement.name, schema: MeasurementSchema },
    ]),
  ],
  providers: [MeasurementsService],
  controllers: [MeasurementsController],
})
export class MeasurementsModule {}
