import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateEventDto } from 'src/events/dtos/CreateEvent.dto';
import { SignupUserEventProps } from 'src/events/types/SignupUserEvent';
import { User } from 'src/typeorm';
import { Event } from 'src/typeorm/Event';
import { Repository } from 'typeorm';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  getEvents() {
    return this.eventRepository.find({ relations: { users: true } });
  }

  createEvent(eventDto: CreateEventDto) {
    const newEvent = this.eventRepository.create({ ...eventDto });

    return this.eventRepository.save(newEvent);
  }

  async signupUserEvent({ userId, eventId }: SignupUserEventProps) {
    const user = await this.userRepository.findOne({ where: { id: userId } });

    if (!user) {
      throw new BadRequestException('User not found');
    }

    const event = await this.eventRepository.findOne({
      relations: {
        users: true,
      },
      where: { id: eventId },
    });

    if (!event) {
      throw new BadRequestException('Event not found');
    }

    const userAlreadySignedToEvent = event.users.find(
      (user) => user.id == userId,
    );

    if (userAlreadySignedToEvent) {
      throw new BadRequestException('User already registered to this event!');
    }

    event.users = [...event.users, user];

    return await this.eventRepository.save(event);
  }
}
