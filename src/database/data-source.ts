import { DataSource, DataSourceOptions } from 'typeorm';
import { Address, Gender, Image, Person, User } from 'src/typeorm';
import * as dotenv from 'dotenv';
import {
  eventMigration1682461712977,
  initialMigration1681684680818,
} from './migrations';
import { Event } from 'src/typeorm/Event';
dotenv.config();

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.HOST,
  port: 5432,
  username: process.env.DATABASE_USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  entities: [User, Image, Person, Gender, Address, Event],
  migrations: [initialMigration1681684680818, eventMigration1682461712977],
  ssl: { rejectUnauthorized: true },
  synchronize: false,
};

export const dataSource = new DataSource(dataSourceOptions);
