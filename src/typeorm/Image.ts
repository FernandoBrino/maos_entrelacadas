import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Event } from './Event';

@Entity('images')
export class Image {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id: number;

  @Column()
  url: string;

  @Column({ name: 'created_at', default: new Date() })
  createdAt: Date;

  @Column({ name: 'updated_at', default: new Date() })
  updatedAt: Date;

  @ManyToOne(() => Event, (event) => event.images)
  event: Event;
}
