import { Type } from 'class-transformer';
import { IsNotEmpty, IsNotEmptyObject, ValidateNested } from 'class-validator';
import { CreateGenderDto } from './CreateGender.dto';

export class CreatePersonDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  birthDate: string;

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => CreateGenderDto)
  gender: CreateGenderDto;
}
