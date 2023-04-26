import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('events')
export class Event {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ name: 'event_at' })
  eventAt: Date;

  @Column({ name: 'created_at', default: new Date() })
  createdAt: Date;

  @Column({ name: 'update_at', default: new Date() })
  updatedAt: Date;
}
