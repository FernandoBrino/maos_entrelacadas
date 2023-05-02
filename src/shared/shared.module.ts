import type { Provider } from "@nestjs/common";
import { Global, Module } from "@nestjs/common";
import { AwsS3Service } from "./services/aws-s3.service";
import { GeneratorService } from "./services/generator.service";
import { ValidatorService } from "./services/validator.service";
import { CqrsModule } from "@nestjs/cqrs";

const providers: Provider[] = [
  AwsS3Service,
  GeneratorService,
  ValidatorService,
];

@Global()
@Module({
  providers,
  imports: [CqrsModule],
  exports: [...providers, CqrsModule],
})
export class SharedModule {}
