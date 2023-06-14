import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';
import { Address, Gender, Image, Person, User } from 'src/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { UserEvent } from 'src/typeorm/UserEvent';
import { Event } from 'src/typeorm/Event';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      Person,
      Gender,
      Address,
      Image,
      Event,
      UserEvent
    ]),
    JwtModule.register({
      secret: process.env.NEST_SECRET_KEY,
      signOptions: { expiresIn: '600s' }
    })
  ],
  controllers: [UsersController],
  providers: [
    {
      provide: 'USERS_SERVICE',
      useClass: UsersService
    }
  ]
})
export class UsersModule {}
