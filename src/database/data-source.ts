import { DataSource, DataSourceOptions } from 'typeorm';
import { Address, Gender, Image, Person, User } from 'src/typeorm';
import { initialMigration1681050795513 } from './migrations';
import * as dotenv from 'dotenv';
dotenv.config();

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.HOST,
  port: 5432,
  username: process.env.DATABASE_USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  entities: [User, Image, Person, Gender, Address],
  migrations: [initialMigration1681050795513],
  ssl: { rejectUnauthorized: true },
  synchronize: false,
};

export const dataSource = new DataSource(dataSourceOptions);
