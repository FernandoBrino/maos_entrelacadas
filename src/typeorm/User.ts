import { Exclude } from 'class-transformer';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Image } from './Image';
import { Person } from './Person';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id: number;

  @Column({ nullable: false })
  username: string;

  @Column({ nullable: false })
  @Exclude()
  password: string;

  @Column({ name: 'is_admin', default: false })
  isAdmin: boolean;

  @Column()
  status: string;

  @Column({ name: 'person_id' })
  @OneToOne(() => Person)
  personId: number;

  @Column({ name: 'image_id' })
  @OneToOne(() => Image)
  imageId: number;
}
