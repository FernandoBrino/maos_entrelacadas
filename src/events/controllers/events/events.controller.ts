import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateEventDto } from 'src/events/dtos/CreateEvent.dto';
import { EventsService } from 'src/events/services/events/events.service';

@Controller('events')
@ApiTags('events')
export class EventsController {
  constructor(
    @Inject('EVENTS_SERVICE') private readonly eventsService: EventsService
  ) {}

  @Get('/:userId')
  getEvents(@Param('userId', ParseIntPipe) id: number) {
    return this.eventsService.getEvents(id);
  }

  @Get('/:userId/:eventId')
  getEventById(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('eventId', ParseIntPipe) eventId: number
  ) {
    return this.eventsService.getEventById(eventId, userId);
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  createEvent(@Body() eventDto: CreateEventDto) {
    return this.eventsService.createEvent(eventDto);
  }

  @Patch('signup/:userId/:eventId')
  signupUserEvent(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('eventId', ParseIntPipe) eventId: number
  ) {
    return this.eventsService.signupUserEvent({ userId, eventId });
  }

  @Delete('signup/:userId/:eventId')
  removeUserFromEvent(
    @Param('eventId', ParseIntPipe) eventId: number,
    @Param('userId', ParseIntPipe) userId: number
  ) {
    return this.eventsService.removeUserFromEvent(userId, eventId);
  }

  @Delete(':id')
  deleteEvent(@Param('id', ParseIntPipe) id: number) {
    return this.eventsService.deleteEvent(id);
  }
}
