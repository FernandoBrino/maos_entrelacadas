import { IsNotEmpty, IsString } from 'class-validator';
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

  images: ImageDto[];
}
