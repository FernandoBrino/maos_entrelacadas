import { IsOptional, IsString } from 'class-validator';

export class UpdateGenderDto {
  @IsString()
  @IsOptional()
  name: string;
}
