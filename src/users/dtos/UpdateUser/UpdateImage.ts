import { IsString } from 'class-validator';

export class UpdateImageDto {
  @IsString()
  url: string;
}
