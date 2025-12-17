import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  //? Creates the NestJS app
  const app = await NestFactory.create(AppModule);

  //? ===== CORS / Allows Angular to communicate with backend
  app.enableCors({
    origin: 'http//localhost:4200', //frontend URL
    credentials: true, // Allows cookies/auth
  });

  //? Validation : Activate DTOs auto validation
  app.useGlobalPipes(new ValidationPipe());

  //? PREFIX : all paths start with /api
  app.setGlobalPrefix('api');

  //? Start off  : launches the server on port 3000
  await app.listen(3000, '0.0.0.0');
}

//? Launch the app
bootstrap();
