import {
  Body,
  Controller,
  Inject,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ChargeDto } from 'src/donations/dtos/Charge.dto';
import { AwsGatewayGuard } from 'src/donations/guards/aws-gateway/aws-gateway.guard';
import { DonationsService } from 'src/donations/services/donations/donations.service';

@Controller('donations')
export class DonationsController {
  constructor(
    @Inject('DONATIONS_SERVICE')
    private readonly donationsService: DonationsService,
  ) {}

  @Post('webhook')
  @UseGuards(AwsGatewayGuard)
  checkoutPixStatus() {
    return { msg: 'funcionou' };
  }

  @Post('donate')
  @UsePipes(ValidationPipe)
  donateValue(@Body() chargeDto: ChargeDto) {
    return this.donationsService.generatePixCharge(chargeDto);
  }
}
