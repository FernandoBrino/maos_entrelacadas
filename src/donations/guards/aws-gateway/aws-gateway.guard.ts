import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable } from 'rxjs';
import { User } from 'src/typeorm';
import { comparePasswords } from 'src/utils/bcrypt';
import { Repository } from 'typeorm';

@Injectable()
export class AwsGatewayGuard implements CanActivate {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async canActivate(context: ExecutionContext) {
    const req = context.switchToHttp().getRequest();

    const { email, password } = req.body;

    const awsUser = await this.userRepository.findOne({
      where: { email: 'aws-gateway-access@aws.com' },
    });

    const isAwsUser =
      awsUser.email === email && comparePasswords(password, awsUser.password);

    if (!isAwsUser) {
      throw new ForbiddenException();
    }

    return true;
  }
}
