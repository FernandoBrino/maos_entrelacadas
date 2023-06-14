import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { DonationsController } from './controllers/donations/donations.controller';
import { DonationsService } from './services/donations/donations.service';
import { RawBodyMiddleware } from './middlewares/raw-body/raw-body.middleware';
import { JsonBodyMiddleware } from './middlewares/json-body/json-body.middleware';

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
export class DonationsModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer
      .apply(RawBodyMiddleware)
      .forRoutes({
        path: '/webhook',
        method: RequestMethod.POST
      })
      .apply(JsonBodyMiddleware)
      .forRoutes('*');
  }
}
