import { EventWithSignupDto } from 'src/events/dtos/EventWithSignup.dto';
import { Event } from 'src/typeorm/Event';

export function eventsSignup(
  events: Event[],
  userId: number,
): EventWithSignupDto[] {
  return events.map((event) => {
    const isSignedUp =
      event.userEvents?.some(
        (userEvent) => Number(userEvent.userId) === userId,
      ) ?? false;

    return { ...event, isSignedUp, userEvents: undefined };
  });
}

export function eventSignup(event: Event, userId: number): EventWithSignupDto {
  const isSignedUp =
    event.userEvents?.some(
      (userEvent) => Number(userEvent.userId) === userId,
    ) ?? false;

  return { ...event, isSignedUp, userEvents: undefined };
}
