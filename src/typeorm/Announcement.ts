import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Image } from './Image';

@Entity('announcements')
export class Announcement {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column('text', { nullable: true, array: true })
  tags: string[];

  @OneToMany(() => Image, (image) => image.event)
  @JoinColumn()
  images: Image[];

  @Column({ name: 'created_at', default: new Date() })
  createdAt: Date;

  @Column({ name: 'updated_at', default: new Date() })
  updatedAt: Date;
}
