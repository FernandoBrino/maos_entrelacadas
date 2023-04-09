import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/services/users/users.service';
import { UserProps } from 'src/users/types/User';
import { comparePasswords } from 'src/utils/bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @Inject('USERS_SERVICE') private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const userDB = await this.usersService.findUserByEmail(email);

    if (userDB) {
      const matched = comparePasswords(password, userDB.password);

      if (matched) {
        return userDB;
      }
    }

    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id };

    return {
      user,
      access_token: this.jwtService.sign(payload),
    };
  }
}
