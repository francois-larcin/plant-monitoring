import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { MeasurementsModule } from './measurements/measurements.module';

@Module({
  imports: [
    //? MongoDB connection on local machine
    MongooseModule.forRoot('mongodb://localhost:27017/plant)monitoring'),
    MeasurementsModule,
  ],
})
export class AppModule {}
