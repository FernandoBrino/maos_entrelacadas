import {
  Body,
  Controller,
  Inject,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateEventDto } from 'src/events/dtos/CreateEvent.dto';
import { EventsService } from 'src/events/services/events/events.service';

@Controller('events')
export class EventsController {
  constructor(
    @Inject('EVENTS_SERVICE') private readonly eventsService: EventsService,
  ) {}

  @Post('create')
  @UsePipes(ValidationPipe)
  createEvent(@Body() eventDto: CreateEventDto) {
    return this.eventsService.createEvent(eventDto);
  }
}
