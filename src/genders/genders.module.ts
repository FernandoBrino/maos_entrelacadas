import { Module } from '@nestjs/common';
import { GendersController } from './controllers/genders/genders.controller';
import { GendersService } from './services/genders/genders.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gender } from 'src/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Gender])],
  controllers: [GendersController],
  providers: [
    {
      provide: 'GENDERS_SERVICE',
      useClass: GendersService,
    },
  ],
})
export class GendersModule {}
