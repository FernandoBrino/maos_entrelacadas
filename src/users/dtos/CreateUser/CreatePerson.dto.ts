import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNotEmptyObject,
  IsString,
  MaxLength,
  ValidateNested,
} from 'class-validator';
import { CreateGenderDto } from './CreateGender.dto';

export class CreatePersonDto {
  @IsNotEmpty()
  @MaxLength(50)
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  birthdate: string;

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => CreateGenderDto)
  gender: CreateGenderDto;
}
