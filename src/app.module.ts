import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { MeasurementsModule } from './measurements/measurements.module';

@Module({
  imports: [
    //? MongoDB connection on local machine
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/plant-monitoring'),
    MeasurementsModule,
  ],
})
export class AppModule {}
