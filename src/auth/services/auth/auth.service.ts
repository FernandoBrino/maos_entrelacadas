import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Login } from 'src/auth/types/Login';
import { User } from 'src/typeorm';
import { UsersService } from 'src/users/services/users/users.service';
import { comparePasswords } from 'src/utils/bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @Inject('USERS_SERVICE') private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(email: string, password: string): Promise<User> {
    const userDB = await this.usersService.findUserByEmail(email);

    if (userDB) {
      const matched = comparePasswords(password, userDB.password);

      if (matched) {
        return userDB;
      }
    }

    return null;
  }

  async login(user: User): Promise<Login> {
    const payload = { email: user.email, sub: user.id };

    return {
      user,
      access_token: this.jwtService.sign(payload)
    };
  }

  async findOrCreateUserFromGoogle(googleId: string): Promise<Login | any> {
    const user = await this.usersService.findUserByGoogleId(googleId);

    if (user) return await this.login(user);

    return { message: 'User not found' };
  }
}
