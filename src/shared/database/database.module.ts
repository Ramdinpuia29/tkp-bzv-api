import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmModuleOptions } from 'src/config/typeorm.config';

@Module({
  imports: [TypeOrmModule.forRootAsync(typeOrmModuleOptions)],
})
export class DatabaseModule {}
