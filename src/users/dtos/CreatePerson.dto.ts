import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNotEmptyObject,
  MaxLength,
  ValidateNested,
} from 'class-validator';
import { CreateGenderDto } from './CreateGender.dto';

export class CreatePersonDto {
  @IsNotEmpty()
  @MaxLength(50)
  name: string;

  @IsNotEmpty()
  birthdate: string;

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => CreateGenderDto)
  gender: CreateGenderDto;
}
