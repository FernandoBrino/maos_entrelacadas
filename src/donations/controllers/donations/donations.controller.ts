import {
  Body,
  Controller,
  Inject,
  Post,
  Req,
  UsePipes,
  ValidationPipe
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { AmountDto } from 'src/donations/dtos/Amount.dto';
import { DonationsService } from 'src/donations/services/donations/donations.service';

@Controller('donations')
@ApiTags('donations')
export class DonationsController {
  constructor(
    @Inject('DONATIONS_SERVICE')
    private readonly donationsService: DonationsService
  ) {}

  @Post('donate')
  @UsePipes(ValidationPipe)
  donateValue(@Body() amountDto: AmountDto) {
    return this.donationsService.createPaymentIntent(amountDto);
  }

  @Post('webhook')
  webhookStatusPayment(@Req() req: Request) {
    return this.donationsService.receiveStatusPaymentWebhook(req);
  }
}
