import { Module } from '@nestjs/common';
import { EventsController } from './controllers/events/events.controller';
import { EventsService } from './services/events/events.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from 'src/typeorm/Event';

@Module({
  imports: [TypeOrmModule.forFeature([Event])],
  controllers: [EventsController],
  providers: [
    {
      provide: 'EVENTS_SERVICE',
      useClass: EventsService,
    },
  ],
})
export class EventsModule {}
