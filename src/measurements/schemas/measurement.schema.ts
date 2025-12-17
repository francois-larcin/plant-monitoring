import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

//! Rôle : Définir la structure des données dans MongoDB (comme une table SQL)

//? TS type for Mongoose docs
export type MeasurementDocument = Measurement & Document;

//? @Schema creates a collection MongoDB called "measurements"
//? Timestamps : true automatically add createdAt and updatedAt

@Schema({ timestamps: true })
export class Measurement {
  //? @Prop = MongoDB property (like a SQL column)
  @Prop({ required: true })
  plantId: string;

  @Prop({ type: Object, required: true })
  soilMoisture: {
    value: number;
    unit: string;
  };

  @Prop({ type: Object, required: true })
  temperature: {
    value: number;
    unit: string;
  };

  @Prop({ type: Object, required: true })
  humidity: {
    value: number;
    unit: string;
  };

  @Prop({ type: Object, required: true })
  light: {
    value: number;
    unit: string;
  };

  @Prop({ type: Object, required: true })
  waterPump: {
    isActive: boolean;
    autoMode: boolean;
  };
}

export const MeasurementSchema = SchemaFactory.createForClass(Measurement);
