import { User } from 'src/typeorm/User';
import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'root',
  database: 'maos_entrelacadas',
  synchronize: false,
  entities: [User],
  migrations: ['./dist/database/migrations/*.js'],
};

export const dataSource = new DataSource(dataSourceOptions);
