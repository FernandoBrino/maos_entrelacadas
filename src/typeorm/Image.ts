import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './User';

@Entity('images')
export class Image {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id: number;

  @Column()
  url: string;

  @OneToOne(() => User, (user) => user.imageId)
  user: User;
}
