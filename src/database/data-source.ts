import { DataSource, DataSourceOptions } from 'typeorm';
import { Address, Gender, Image, Person, User } from 'src/typeorm';
import * as dotenv from 'dotenv';
import { Event } from 'src/typeorm/Event';
import {
  addressComplementMigration1684416422039,
  featGenderMigration1684250092385,
  fixUpdatedAtImageMigration1684172806013,
  fixUpdatedAtMigration1684248600503,
  initialMigration1684162600537,
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
    initialMigration1684162600537,
    fixUpdatedAtImageMigration1684172806013,
    fixUpdatedAtMigration1684248600503,
    featGenderMigration1684250092385,
    addressComplementMigration1684416422039,
  ],
  ssl: { rejectUnauthorized: true },
  synchronize: false,
};

export const dataSource = new DataSource(dataSourceOptions);
