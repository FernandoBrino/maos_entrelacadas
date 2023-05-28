import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { User } from './User';
import { Event } from './Event';

@Entity('user_events')
export class UserEvent {
  @PrimaryColumn()
  userId: number;

  @PrimaryColumn()
  eventId: number;

  @ManyToOne(() => User, (user) => user.userEvents)
  user: User;

  @ManyToOne(() => Event, (event) => event.userEvents)
  event: Event;

  @Column({ name: 'created_at', default: new Date() })
  createdAt: Date;
}
