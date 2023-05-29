import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  Inject,
  Post,
  Req,
  Request,
  Res,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { GoogleAuthGuard } from 'src/auth/guards/google-auth/google-auth.guard';
import { LocalAuthGuard } from 'src/auth/guards/local-auth/local-auth.guard';
import { AuthService } from 'src/auth/services/auth/auth.service';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authService: AuthService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @UseInterceptors(ClassSerializerInterceptor)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Post('google/login')
  async googleAuth(@Req() req) {
    return this.authService.findOrCreateUserFromGoogle(req.body);
  }
}
