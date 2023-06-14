import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn
} from 'typeorm';
import { Gender } from './Gender';
import { Address } from './Address';

@Entity('person')
export class Person {
  @PrimaryGeneratedColumn({
    type: 'bigint'
  })
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ name: 'birth_date', nullable: true })
  birthdate: Date;

  @Column({ name: 'created_at', default: new Date() })
  createdAt: Date;

  @Column({ name: 'updated_at', default: new Date() })
  updatedAt: Date;

  @Column({ nullable: true, default: null })
  cpf: number;

  @OneToOne(() => Address, { eager: false, nullable: true })
  @JoinColumn()
  address: Address | null;

  @ManyToOne(() => Gender, { eager: true, nullable: true })
  @JoinColumn()
  gender: Gender | null;
}
