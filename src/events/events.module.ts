import { Module } from '@nestjs/common';
import { EventsController } from './controllers/events/events.controller';
import { EventsService } from './services/events/events.service';

@Module({
  controllers: [EventsController],
  providers: [EventsService]
})
export class EventsModule {}
