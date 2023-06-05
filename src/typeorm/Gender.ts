import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('genders')
export class Gender {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ nullable: true })
  name: string;

  @Column({ name: 'created_at', default: new Date() })
  createdAt: Date;

  @Column({ name: 'updated_at', default: new Date() })
  updatedAt: Date;
}
