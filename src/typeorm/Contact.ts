import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Person } from './Person';

@Entity()
export class Contact {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  cellphone: number;

  @Column()
  telephone: number;

  @OneToOne(() => Person, (person) => person.contactId)
  person: Person;
}
