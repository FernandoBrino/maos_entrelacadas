import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { Inject, Injectable } from '@nestjs/common';
import { AuthService } from '../services/auth/auth.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authService: AuthService,
  ) {
    super({
      clientID:
        '312427646187-89ta4vu1tfrp9q9hchubpuq7a1scre1j.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: 'http://localhost:3000/auth/google/redirect',
      passReqToCallback: true,
      scope: ['profile', 'email'],
    });
  }

  async validate(
    request: any,
    accessToken: string,
    refreshToken: string,
    profile: GoogleProfile,
    done: VerifyCallback,
  ) {
    const user = await this.authService.findOrCreateUserFromGoogle(profile.id);
    done(null, user);
  }
}
