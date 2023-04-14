import {
  IsEmail,
  IsNotEmpty,
  IsNotEmptyObject,
  IsString,
  ValidateNested,
} from 'class-validator';
import { User } from '../../typeorm/User';
import { CreatePersonDto } from './CreatePerson.dto';
import { Type } from 'class-transformer';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  isAdmin: boolean;

  @IsNotEmpty()
  cellphone: string;

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => CreatePersonDto)
  person: CreatePersonDto;

  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }
}
