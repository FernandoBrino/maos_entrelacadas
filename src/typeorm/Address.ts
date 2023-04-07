import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Person } from './Person';

@Entity()
export class Address {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  country: string;

  @Column()
  state: string;

  @Column()
  district: string;

  @Column()
  street: string;

  @Column()
  number: number;

  @Column()
  zipcode: number;

  @OneToOne(() => Person, (person) => person.addressId)
  person: Person;
}
