import type { Provider } from '@nestjs/common';
import { Global, Module } from '@nestjs/common';
import { AwsS3Service } from './services/aws-s3.service';
import { CqrsModule } from '@nestjs/cqrs';

const providers: Provider[] = [AwsS3Service];

@Global()
@Module({
  providers,
  imports: [CqrsModule],
  exports: [...providers, CqrsModule],
})
export class SharedModule {}
