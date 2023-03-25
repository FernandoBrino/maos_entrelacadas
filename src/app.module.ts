import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/typeorm/User';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'aws-sa-east-1.connect.psdb.cloud',
      port: 3306,
      username: '2eat7wgk46ylts2stolo',
      password: 'pscale_pw_JfTAJo6NG3aHcOt25lFndnavLe2DcyyELDlAlP3vvwW',
      database: 'maos_entrelacadas',
      entities: [User],
      ssl: { rejectUnauthorized: true },
      synchronize: true,
      // DATABASE_URL='mysql://2eat7wgk46ylts2stolo:pscale_pw_JfTAJo6NG3aHcOt25lFndnavLe2DcyyELDlAlP3vvwW@aws-sa-east-1.connect.psdb.cloud/maos_entrelacadas?ssl={"rejectUnauthorized":true}'
    }),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
