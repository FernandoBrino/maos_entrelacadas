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
  cellphone: number;

  @Column({ name: 'person_id' })
  @OneToOne(() => Person, { eager: true })
  @JoinColumn({ name: 'personId' })
  personId: number;

  @Column({ name: 'image_id', nullable: true })
  @OneToOne(() => Image)
  imageId: number;
}
