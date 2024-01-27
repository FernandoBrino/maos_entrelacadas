import { DataSource, DataSourceOptions } from 'typeorm';
import { Address, Gender, Image, Person, User } from 'src/typeorm';
import * as dotenv from 'dotenv';
import { Event } from 'src/typeorm/Event';
import { Announcement } from 'src/typeorm/Announcement';
import { UserEvent } from 'src/typeorm/UserEvent';
import { initialMigration1706372961341 } from './migrations';

dotenv.config();

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  port: 5432,
  password: process.env.PASSWORD,
  url: process.env.DATABASE_URL,
  entities: [
    User,
    Image,
    Person,
    Gender,
    Address,
    Event,
    Announcement,
    UserEvent
  ],
  migrations: [initialMigration1706372961341],
  ssl: { rejectUnauthorized: true },
  synchronize: false
};

export const dataSource = new DataSource(dataSourceOptions);
