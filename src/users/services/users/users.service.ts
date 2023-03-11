import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/typeorm/User';
import { UserProps } from 'src/users/types/User';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  createUser(userProps: UserProps) {
    const newUser = this.userRepository.create(userProps);
    return this.userRepository.save(newUser);
  }
}
