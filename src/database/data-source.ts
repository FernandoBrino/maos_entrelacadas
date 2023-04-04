import { User } from 'src/typeorm/User';
import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: 'aws-sa-east-1.connect.psdb.cloud',
  port: 3306,
  username: '2eat7wgk46ylts2stolo',
  password: 'pscale_pw_JfTAJo6NG3aHcOt25lFndnavLe2DcyyELDlAlP3vvwW',
  database: 'maos_entrelacadas',
  entities: [User],
  ssl: { rejectUnauthorized: true },
  synchronize: false,
  // DATABASE_URL='mysql://2eat7wgk46ylts2stolo:pscale_pw_JfTAJo6NG3aHcOt25lFndnavLe2DcyyELDlAlP3vvwW@aws-sa-east-1.connect.psdb.cloud/maos_entrelacadas?ssl={"rejectUnauthorized":true}'
  migrations: ['./dist/database/migrations/*.js'],
};

export const dataSource = new DataSource(dataSourceOptions);
