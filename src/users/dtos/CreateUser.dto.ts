import { IsNotEmpty, IsString } from 'class-validator';
import { User } from '../../typeorm/User';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  status: string;

  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }
}
