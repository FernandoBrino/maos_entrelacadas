import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from './database/data-source';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { GendersModule } from './genders/genders.module';
import { EventsModule } from './events/events.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({ ...dataSourceOptions, autoLoadEntities: true }),
    UsersModule,
    AuthModule,
    ConfigModule.forRoot(),
    GendersModule,
    EventsModule,
    SharedModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
