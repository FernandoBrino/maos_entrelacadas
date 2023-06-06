import { Module } from '@nestjs/common';
import { DonationsController } from './controllers/donations/donations.controller';
import { DonationsService } from './services/donations/donations.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [DonationsController],
  providers: [
    {
      provide: 'DONATIONS_SERVICE',
      useClass: DonationsService,
    },
  ],
})
export class DonationsModule {}
