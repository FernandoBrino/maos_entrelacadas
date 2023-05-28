import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateEventDto } from 'src/events/dtos/CreateEvent.dto';
import { SignupUserEventProps } from 'src/events/types/SignupUserEvent';
import { User } from 'src/typeorm';
import { Event } from 'src/typeorm/Event';
import { UserEvent } from 'src/typeorm/UserEvent';
import { Repository } from 'typeorm';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(UserEvent)
    private readonly userEventRepository: Repository<UserEvent>,
  ) {}

  getEvents() {
    return this.eventRepository.find({ relations: { userEvents: true } });
  }

  createEvent(eventDto: CreateEventDto) {
    const newEvent = this.eventRepository.create({ ...eventDto });

    return this.eventRepository.save(newEvent);
  }

  async signupUserEvent({ userId, eventId }: SignupUserEventProps) {
    const user = await this.userRepository.findOne({
      where: { id: userId },
    });
    const event = await this.eventRepository.findOne({
      where: { id: eventId },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    if (!event) {
      throw new NotFoundException('Event not found');
    }

    const signupUserToEvent = this.userEventRepository.create({
      userId,
      eventId,
    });

    user.userEvents = [...user.userEvents, signupUserToEvent];
    event.userEvents = [...event.userEvents, signupUserToEvent];

    await this.userRepository.save(user);
    await this.eventRepository.save(user);
    await this.userEventRepository.save(signupUserToEvent);

    return event;
  }
}
