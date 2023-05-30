import { Event } from 'src/typeorm/Event';

export class EventWithSignupDto extends Event {
  isSignedUp: boolean;
}
