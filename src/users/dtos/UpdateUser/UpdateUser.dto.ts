import { Type } from 'class-transformer';
import { UpdateImageDto } from './UpdateImage';
import { UpdatePersonDto } from './UpdatePerson';
import {
  IsBoolean,
  IsEmail,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @MaxLength(50)
  @IsOptional()
  username: string;

  @IsEmail()
  @IsString()
  @MaxLength(50)
  @IsOptional()
  email: string;

  @IsString()
  @MinLength(8)
  @MaxLength(100)
  @IsOptional()
  password: string;

  @IsBoolean()
  @IsOptional()
  isAdmin: boolean;

  @IsString()
  @IsOptional()
  status: string;

  @MaxLength(11)
  @IsString()
  @IsOptional()
  cellphone: string;

  @ValidateNested()
  @Type(() => UpdatePersonDto)
  @IsOptional()
  person: UpdatePersonDto;

  @ValidateNested()
  @Type(() => UpdateImageDto)
  @IsOptional()
  image: UpdateImageDto;
}
