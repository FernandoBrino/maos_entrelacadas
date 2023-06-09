import { Exclude } from 'class-transformer';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn
} from 'typeorm';
import { Image } from './Image';
import { Person } from './Person';
import { UserEvent } from './UserEvent';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn({
    type: 'bigint'
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

  @Column({ default: 'Voluntário' })
  status: string;

  @Column({ nullable: true })
  cellphone: string;

  @Column({ name: 'created_at', default: new Date() })
  createdAt: Date;

  @Column({ name: 'updated_at', default: new Date() })
  updatedAt: Date;

  @Column({ name: 'google_id', nullable: true })
  googleId: string;

  @Column({ name: 'facebook_id', nullable: true })
  facebookId: string;

  @OneToOne(() => Person, { eager: true, nullable: true })
  @JoinColumn()
  person: Person | null;

  @OneToOne(() => Image, { nullable: true })
  @JoinColumn()
  image: Image | null;

  @OneToMany(() => UserEvent, (userEvent) => userEvent.user)
  userEvents: UserEvent[];

  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }
}
