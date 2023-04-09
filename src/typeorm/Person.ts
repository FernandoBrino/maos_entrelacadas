import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Gender } from './Gender';
import { Address } from './Address';

@Entity()
export class Person {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ name: 'birth_date', nullable: false })
  birthDate: Date;

  @Column({ name: 'created_at', default: new Date() })
  createdAt: Date;

  @Column({ name: 'update_at', default: new Date() })
  updatedAt: Date;

  @Column({ nullable: true, default: null })
  cpf: number;

  @OneToOne(() => Address, { eager: true })
  @JoinColumn()
  address: Address;

  @OneToOne(() => Gender, { eager: true })
  @JoinColumn()
  gender: Gender;
}
