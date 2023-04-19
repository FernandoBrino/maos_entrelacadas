import {
  IsEmail,
  IsNotEmpty,
  IsNotEmptyObject,
  IsString,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { User } from '../../typeorm/User';
import { CreatePersonDto } from './CreatePerson.dto';
import { Type } from 'class-transformer';
import { CreateImageDto } from './CreateImage.dto';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  username: string;

  @IsNotEmpty()
  @IsEmail()
  @MaxLength(50)
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @MaxLength(100)
  password: string;

  isAdmin: boolean;

  @IsNotEmpty()
  @MaxLength(11)
  cellphone: string;

  @ValidateNested()
  @Type(() => CreateImageDto)
  image: CreateImageDto;

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => CreatePersonDto)
  person: CreatePersonDto;

  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }
}
