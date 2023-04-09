import { IsNotEmpty } from 'class-validator';

export class CreateGenderDto {
  @IsNotEmpty()
  name: string;
}
