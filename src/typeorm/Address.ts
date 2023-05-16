import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('addresses')
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

  @Column({ name: 'created_at', default: new Date() })
  createdAt: Date;

  @Column({ name: 'updated_at', default: new Date() })
  updatedAt: Date;
}
