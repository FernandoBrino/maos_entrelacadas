import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';
import { Address, Gender, Image, Person, User } from 'src/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([User, Person, Gender, Address, Image])],
  controllers: [UsersController],
  providers: [
    {
      provide: 'USERS_SERVICE',
      useClass: UsersService,
    },
  ],
})
export class UsersModule {}
