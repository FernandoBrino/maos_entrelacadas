import { Exclude } from 'class-transformer';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Image } from './Image';
import { Person } from './Person';

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

  @OneToOne(() => Person, { eager: true })
  @JoinColumn()
  person: Person;

  @OneToOne(() => Image, { eager: true })
  @JoinColumn()
  image: Image;
}
