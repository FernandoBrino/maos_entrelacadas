import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/services/users/users.service';
import { comparePasswords } from 'src/utils/bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @Inject('USERS_SERVICE') private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string) {
    const userDB = await this.usersService.findUserByUsername(username);

    if (userDB) {
      const matched = comparePasswords(password, userDB.password);

      if (matched) {
        return userDB;
      }
    }

    return null;
  }

  async login(user: any) {
    const payload = { name: user.username, sub: user.id };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
