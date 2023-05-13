import { DataSource, DataSourceOptions } from 'typeorm';
import { Address, Gender, Image, Person, User } from 'src/typeorm';
import * as dotenv from 'dotenv';
import { Event } from 'src/typeorm/Event';
import {
  eventImageRelationMigration1683042666435,
  eventMigration1682461712977,
  initialMigration1681684680818,
  initialMigration1683916866648,
  sideRelationEventMigration1683495707653,
} from './migrations';
dotenv.config();

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.HOST,
  port: 5432,
  username: process.env.DATABASE_USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  entities: [User, Image, Person, Gender, Address, Event],
  migrations: [
    initialMigration1683916866648,
    initialMigration1681684680818,
    eventMigration1682461712977,
    eventImageRelationMigration1683042666435,
    sideRelationEventMigration1683495707653,
  ],
  ssl: { rejectUnauthorized: true },
  synchronize: false,
};

export const dataSource = new DataSource(dataSourceOptions);
