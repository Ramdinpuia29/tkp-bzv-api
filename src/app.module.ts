import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SharedModule } from './shared/shared.module';

import { validate } from './env.validation';

import databaseConfig from './config/database.config';
import typeormConfig from './config/typeorm.config';
import appConfig from './config/app.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate,
      load: [databaseConfig, typeormConfig, appConfig],
    }),
    SharedModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
