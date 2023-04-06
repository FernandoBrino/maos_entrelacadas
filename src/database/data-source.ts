import { DataSource, DataSourceOptions } from 'typeorm';
import {
  imageMigration1680801264731,
  personMigration1680805472036,
} from './migrations';
import * as dotenv from 'dotenv';
import { Image, Person, User } from 'src/typeorm';
dotenv.config();

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.HOST,
  port: 5432,
  username: process.env.DATABASE_USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  entities: [User, Image, Person],
  ssl: { rejectUnauthorized: true },
  synchronize: false,
  migrations: [imageMigration1680801264731, personMigration1680805472036],
};

export const dataSource = new DataSource(dataSourceOptions);
