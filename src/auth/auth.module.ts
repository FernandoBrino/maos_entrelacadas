import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth/auth.controller';
import { AuthService } from './services/auth/auth.service';
import { UsersService } from 'src/users/services/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/typeorm/User';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './passportStrategies/local.strategy';
import { JwtStrategy } from './passportStrategies/jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import * as dotenv from 'dotenv';
import { ConfigModule } from '@nestjs/config';
import { Gender, Person } from 'src/typeorm';
dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Person, Gender]),
    PassportModule,
    JwtModule.register({
      secret: process.env.NEST_SECRET_KEY,
      signOptions: { expiresIn: '600s' },
    }),
    ConfigModule,
  ],
  controllers: [AuthController],
  providers: [
    {
      provide: 'AUTH_SERVICE',
      useClass: AuthService,
    },
    {
      provide: 'USERS_SERVICE',
      useClass: UsersService,
    },
    JwtStrategy,
    LocalStrategy,
  ],
})
export class AuthModule {}
