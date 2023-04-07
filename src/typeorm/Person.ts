import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Gender } from './Gender';
import { User } from './User';
import { Contact } from './Contact';
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

  @Column({ name: 'contact_id', nullable: false })
  @OneToOne(() => Contact)
  contactId: number;

  @Column({ name: 'address_id', nullable: true })
  @OneToOne(() => Address)
  addressId: number;

  @Column({ name: 'gender_id', nullable: false })
  @OneToOne(() => Gender)
  genderId: number;

  @OneToOne(() => User, (user) => user.personId)
  user: User;
}
