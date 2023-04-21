import { IsOptional, IsString } from 'class-validator';

export class UpdateImageDto {
  @IsString()
  @IsOptional()
  url: string;
}
