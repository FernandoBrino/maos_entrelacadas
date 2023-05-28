import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { ImageDto } from 'src/dtos/ImageDto';

export class CreateAnnouncementDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  tags: string[];

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => ImageDto)
  images: ImageDto[];
}
