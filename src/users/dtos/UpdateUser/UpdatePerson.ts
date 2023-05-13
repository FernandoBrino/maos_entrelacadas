import { Type } from 'class-transformer';
import { UpdateAddressDto } from './UpdateAddress';
import { UpdateGenderDto } from './UpdateGender';
import {
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  ValidateNested,
} from 'class-validator';

export class UpdatePersonDto {
  @IsString()
  @MaxLength(50)
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  birthdate: Date;

  @IsNumber()
  @IsOptional()
  cpf: number;

  @ValidateNested()
  @Type(() => UpdateAddressDto)
  @IsOptional()
  address: UpdateAddressDto;

  @ValidateNested()
  @Type(() => UpdateGenderDto)
  @IsOptional()
  gender: UpdateGenderDto;
}
