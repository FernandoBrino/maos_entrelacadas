import { Injectable } from '@nestjs/common';
import { S3 } from '@aws-sdk/client-s3';
import mime from 'mime-types';
import { GeneratorService } from './generator.service';
import { ApiConfigService } from './api-config.service';
import { UpdateAvatarDto } from 'src/users/dtos/UpdateUser/UpdateAvatar.dto';

type Folder = 'Comunicado' | 'Evento' | 'Avatar';

@Injectable()
export class AwsS3Service {
  private readonly s3: S3;

  constructor(
    public configService: ApiConfigService,
    public generatorService: GeneratorService,
  ) {
    console.log(configService);
    const awsS3Config = configService.awsS3Config;

    this.s3 = new S3({
      // apiVersion: awsS3Config.bucketApiVersion,
      region: awsS3Config.bucketRegion,
      credentials: {
        accessKeyId: process.env.MY_AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.MY_AWS_SECRET_ACCESS_KEY,
      },
    });
  }

  async uploadImage(
    { photoFile }: UpdateAvatarDto,
    folder: Folder = 'Avatar',
  ): Promise<string> {
    const { name, ext } = photoFile;
    const fileName = this.generatorService.fileName(name, ext);

    const fileBuffer = Buffer.from(photoFile.uri, 'base64');

    const key = `images/${folder}/${fileName}`;
    await this.s3.putObject({
      Bucket: this.configService.awsS3Config.bucketName,
      Body: fileBuffer,
      ACL: 'public-read',
      Key: key,
      ContentType: `image/${ext}`,
    });

    return `${this.configService.awsS3Config.s3Url}/images/${folder}/${fileName}`;
  }
}
