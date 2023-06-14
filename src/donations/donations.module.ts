import { Module } from '@nestjs/common';
import { DonationsController } from './controllers/donations/donations.controller';
import { DonationsService } from './services/donations/donations.service';

@Module({
  imports: [],
  controllers: [DonationsController],
  providers: [
    {
      provide: 'DONATIONS_SERVICE',
      useClass: DonationsService
    }
  ]
})
export class DonationsModule {}
