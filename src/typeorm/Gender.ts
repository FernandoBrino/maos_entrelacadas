import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Person } from './Person';

@Entity('genders')
export class Gender {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  name: string;

  @OneToOne(() => Person, (person) => person.genderId)
  person: Person;
}
