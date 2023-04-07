import { DataSource, DataSourceOptions } from 'typeorm';
import {
  addressMigration1680828018085,
  contactMigration1680826019683,
  fixRequiredDataMigration1680829236837,
  genderMigration1680808870809,
  imageMigration1680801264731,
  personMigration1680805472036,
} from './migrations';
import { Address, Contact, Gender, Image, Person, User } from 'src/typeorm';
import * as dotenv from 'dotenv';
dotenv.config();

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.HOST,
  port: 5432,
  username: process.env.DATABASE_USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  entities: [User, Image, Person, Gender, Contact, Address],
  ssl: { rejectUnauthorized: true },
  synchronize: false,
  migrations: [
    imageMigration1680801264731,
    personMigration1680805472036,
    genderMigration1680808870809,
    contactMigration1680826019683,
    addressMigration1680828018085,
    fixRequiredDataMigration1680829236837,
  ],
};

export const dataSource = new DataSource(dataSourceOptions);
