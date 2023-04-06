import { User } from 'src/typeorm/User';
import { DataSource, DataSourceOptions } from 'typeorm';
import { Image } from 'src/typeorm/Image';
import { imageMigration1680801264731 } from './migrations';
import * as dotenv from 'dotenv';
dotenv.config();

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.HOST,
  port: 5432,
  username: process.env.DATABASE_USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  entities: [User, Image],
  ssl: { rejectUnauthorized: true },
  synchronize: false,
  migrations: [imageMigration1680801264731],
};

export const dataSource = new DataSource(dataSourceOptions);
