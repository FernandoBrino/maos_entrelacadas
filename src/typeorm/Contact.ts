import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Person } from './Person';

@Entity()
export class Contact {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: false })
  cellphone: number;

  @OneToOne(() => Person, (person) => person.contactId)
  person: Person;
}
