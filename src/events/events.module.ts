import { Module } from '@nestjs/common';
import { EventsController } from './controllers/events/events.controller';
import { EventsService } from './services/events/events.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from 'src/typeorm/Event';
import { Image, User } from 'src/typeorm';
import { UserEvent } from 'src/typeorm/UserEvent';

@Module({
  imports: [TypeOrmModule.forFeature([Event, User, UserEvent, Image])],
  controllers: [EventsController],
  providers: [
    {
      provide: 'EVENTS_SERVICE',
      useClass: EventsService,
    },
  ],
})
export class EventsModule {}
