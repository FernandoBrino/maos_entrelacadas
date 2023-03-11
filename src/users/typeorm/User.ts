import { Exclude } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'user_id',
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
}
