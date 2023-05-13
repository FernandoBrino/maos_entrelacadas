import { IsNotEmpty, IsNumber } from 'class-validator';

export class EventSignupDto {
  @IsNotEmpty()
  @IsNumber()
  userId: number;

  @IsNotEmpty()
  @IsNumber()
  eventId: number;
}
