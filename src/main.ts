import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  app.setGlobalPrefix('/api');

  const url = configService.get<string>('app.url');
  const port = configService.get<number>('app.port');

  await app.listen(port);

  console.log(`⚡ Server running on: http://${url}:${port} ⚡`);
}
bootstrap();
