import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
