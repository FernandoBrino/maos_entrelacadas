import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Image } from './Image';

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

  @Column({ name: 'start_time' })
  startTime: Date;

  @Column({ name: 'end_time' })
  endTime: Date;

  @OneToMany(() => Image, (image) => image.event)
  images: Image[];
}
