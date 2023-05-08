import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { ImageDto } from 'src/dtos/ImageDto';

export class CreateEventDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  descscription: string;

  @IsNotEmpty()
  eventAt: Date;

  @IsNotEmpty()
  startTime: Date;

  @IsNotEmpty()
  endTime: Date;

  @Type(() => ImageDto)
  @ValidateNested()
  images: ImageDto[];
}
