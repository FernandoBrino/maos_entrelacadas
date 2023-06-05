import { IsNotEmpty, IsString } from 'class-validator';

export class ChargeDto {
  @IsString()
  @IsNotEmpty()
  amount: string;
}
