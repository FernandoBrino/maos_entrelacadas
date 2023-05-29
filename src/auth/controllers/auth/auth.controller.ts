import {
  ClassSerializerInterceptor,
  Controller,
  Inject,
  Param,
  Post,
  Request,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { GoogleAuthGuard } from 'src/auth/guards/google-auth/google-auth.guard';
import { LocalAuthGuard } from 'src/auth/guards/local-auth/local-auth.guard';
import { AuthService } from 'src/auth/services/auth/auth.service';

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

  @Post('google/login/:id')
  async googleAuth(@Param('id') id: string) {
    return this.authService.findOrCreateUserFromGoogle(id);
  }
}
