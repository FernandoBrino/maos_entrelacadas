import { Injectable } from '@nestjs/common';
// import { ConfigService } from '@nestjs/config';

@Injectable()
export class ApiConfigService {
  // constructor(private configService: ConfigService) {}

  get awsS3Config() {
    return {
      bucketRegion: process.env.BUCKET_REGION,
      bucketApiVersion: process.env.BUCKET_API_VERSION,
      bucketName: process.env.BUCKET_NAME,
    };
  }
}
