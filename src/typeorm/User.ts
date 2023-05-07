import { Exclude } from 'class-transformer';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Image } from './Image';
import { Person } from './Person';
import { Event } from './Event';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id: number;

  @Column({ nullable: false })
  username: string;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: false })
  @Exclude()
  password: string;

  @Column({ name: 'is_admin', default: false })
  isAdmin: boolean;

  @Column({ default: 'voluntário' })
  status: string;

  @Column({ nullable: false })
  cellphone: string;

  @Column({ name: 'created_at', default: new Date() })
  createdAt: Date;

  @Column({ name: 'update_at', default: new Date() })
  updatedAt: Date;

  @OneToOne(() => Person, { eager: true })
  @JoinColumn()
  person: Person;

  @OneToOne(() => Image, { eager: true })
  @JoinColumn()
  image: Image;

  @ManyToMany(() => Event)
  @JoinColumn()
  events: Event[];
}
