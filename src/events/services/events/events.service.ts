import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateEventDto } from 'src/events/dtos/CreateEvent.dto';
import { Event } from 'src/typeorm/Event';
import { Repository } from 'typeorm';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Event) private eventRepository: Repository<Event>,
  ) {}

  getEvents() {
    return this.eventRepository.find();
  }

  createEvent(eventDto: CreateEventDto) {
    const newEvent = this.eventRepository.create({ ...eventDto });

    return this.eventRepository.save(newEvent);
  }
}
