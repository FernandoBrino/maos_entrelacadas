import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('images')
export class Image {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id: number;

  @Column()
  url: string;

  @Column({ name: 'created_at', default: new Date() })
  createdAt: Date;

  @Column({ name: 'update_at', default: new Date() })
  updatedAt: Date;
}
