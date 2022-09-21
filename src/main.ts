import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  app.setGlobalPrefix('/api');

  const config = new DocumentBuilder()
    .setTitle('TKP Bazarveng Application API')
    .setDescription('An API Documentation for TKP Bazarveng Application')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api', app, document);

  const url = configService.get<string>('app.url');
  const port = configService.get<number>('app.port');

  await app.listen(port);

  console.log(`⚡ Server running on: http://${url}:${port} ⚡`);
  console.log(`📄 API Documentation: http://${url}:${port}/api 📄`);
}
bootstrap();
