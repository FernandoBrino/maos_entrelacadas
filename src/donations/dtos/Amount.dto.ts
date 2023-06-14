import { IsNotEmpty, IsNumber } from 'class-validator';

export class AmountDto {
  @IsNumber()
  @IsNotEmpty()
  amount: number;
}
