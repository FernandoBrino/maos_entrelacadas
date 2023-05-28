import { DataSource, DataSourceOptions } from 'typeorm';
import { Address, Gender, Image, Person, User } from 'src/typeorm';
import * as dotenv from 'dotenv';
import { Event } from 'src/typeorm/Event';
import { Announcement } from 'src/typeorm/Announcement';
import { UserEvent } from 'src/typeorm/UserEvent';
import { initialMigration1685287055106 } from './migrations';
dotenv.config();

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.HOST,
  port: 5432,
  username: process.env.DATABASE_USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  entities: [
    User,
    Image,
    Person,
    Gender,
    Address,
    Event,
    Announcement,
    UserEvent,
  ],
  migrations: [initialMigration1685287055106],
  ssl: { rejectUnauthorized: true },
  synchronize: false,
};

export const dataSource = new DataSource(dataSourceOptions);
