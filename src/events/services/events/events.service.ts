import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateEventDto } from 'src/events/dtos/CreateEvent.dto';
import { EventWithSignupDto } from 'src/events/dtos/EventWithSignup.dto';
import { SignupUserEventProps } from 'src/events/types/SignupUserEvent';
import { Image, User } from 'src/typeorm';
import { Event } from 'src/typeorm/Event';
import { UserEvent } from 'src/typeorm/UserEvent';
import { eventSignup, eventsSignup } from 'src/utils/signUpEvents';
import { Repository } from 'typeorm';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(UserEvent)
    private readonly userEventRepository: Repository<UserEvent>,
    @InjectRepository(Image)
    private readonly imageRepository: Repository<Image>,
  ) {}

  async getEvents(userId: number): Promise<EventWithSignupDto[]> {
    const events = await this.eventRepository.find({
      relations: { userEvents: true, images: true },
    });

    return eventsSignup(events, userId);
  }

  async getEventById(id: number, userId?: number): Promise<Event> {
    const event = await this.eventRepository.findOne({
      where: { id },
      relations: { userEvents: true, images: true },
    });

    if (!event) {
      throw new NotFoundException('Event not found');
    }

    return eventSignup(event, userId);
  }

  async createEvent(eventDto: CreateEventDto): Promise<Event> {
    const newEvent = this.eventRepository.create({ ...eventDto });

    if (eventDto.images) {
      const newImages = this.imageRepository.create(eventDto.images);

      newEvent.images = newImages;
      await this.imageRepository.save(newImages);
    }

    return this.eventRepository.save(newEvent);
  }

  async signupUserEvent({
    userId,
    eventId,
  }: SignupUserEventProps): Promise<Event> {
    const user = await this.userRepository.findOne({
      where: { id: userId },
      relations: { userEvents: true },
    });
    const event = await this.eventRepository.findOne({
      where: { id: eventId },
      relations: { userEvents: true },
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
    await this.eventRepository.save(event);
    await this.userEventRepository.save(signupUserToEvent);

    return event;
  }

  async removeUserFromEvent(userId: number, eventId: number): Promise<void> {
    const user = await this.userRepository.findOne({
      where: { id: userId },
      relations: { userEvents: true },
    });
    const event = await this.eventRepository.findOne({
      where: { id: eventId },
      relations: { userEvents: true },
    });

    if (!user || !event) {
      throw new NotFoundException('User or Event not found');
    }

    const userEvent = event.userEvents.find(
      (ue) => +ue.userId === +userId && +ue.eventId === +eventId,
    );

    if (userEvent) {
      event.userEvents = event.userEvents.filter((ue) => ue !== userEvent);

      await this.userEventRepository.remove(userEvent);
      await this.eventRepository.save(event);
    }
  }

  async deleteEvent(id: number): Promise<void> {
    const event = await this.getEventById(id);

    await this.eventRepository.remove(event);
  }
}
