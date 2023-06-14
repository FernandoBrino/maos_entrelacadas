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
      awsAccessKeyId: process.env.MY_AWS_ACCESS_KEY_ID,
      awsSecretAccessKey: process.env.MY_AWS_SECRET_ACCESS_KEY,
      s3Url: process.env.S3_URL,
    };
  }
}
