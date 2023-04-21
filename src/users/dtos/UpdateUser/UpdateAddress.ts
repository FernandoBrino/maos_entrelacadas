import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateAddressDto {
  @IsString()
  @IsOptional()
  country: string;

  @IsString()
  @IsOptional()
  state: string;

  @IsString()
  @IsOptional()
  district: string;

  @IsString()
  @IsOptional()
  street: string;

  @IsNumber()
  @IsOptional()
  number: number;

  @IsNumber()
  @IsOptional()
  zipcode: number;
}
