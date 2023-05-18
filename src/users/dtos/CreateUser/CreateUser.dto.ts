import {
  IsEmail,
  IsNotEmpty,
  IsNotEmptyObject,
  IsString,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { User } from '../../../typeorm/User';
import { CreatePersonDto } from './CreatePerson.dto';
import { Type } from 'class-transformer';
import { ImageDto } from 'src/dtos/ImageDto';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  username: string;

  @IsNotEmpty()
  @IsEmail()
  @IsString()
  @MaxLength(50)
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @MaxLength(100)
  password: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(11)
  cellphone: string;

  @ValidateNested()
  @Type(() => ImageDto)
  image: ImageDto;

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => CreatePersonDto)
  person: CreatePersonDto;
}
