import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Gender } from './Gender';
import { User } from './User';
import { Contact } from './Contact';

@Entity()
export class Person {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column({ name: 'birth_date' })
  birthDate: Date;

  @Column({ name: 'created_at' })
  createdAt: Date;

  @Column({ name: 'update_at' })
  updatedAt: Date;

  @Column()
  rg: number;

  @Column()
  cpf: number;

  @Column({ name: 'contact_id' })
  @OneToOne(() => Contact)
  contactId: number;

  @Column({ name: 'address_id' })
  addressId: number;

  @Column({ name: 'gender_id' })
  @OneToOne(() => Gender)
  genderId: number;

  @OneToOne(() => User, (user) => user.personId)
  user: User;
}
