import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/typeorm';
import { UsersService } from 'src/users/services/users/users.service';
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

  async login({
    id,
    email,
    username,
    isAdmin,
    status,
    cellphone,
    person,
    image,
  }: User) {
    const payload = { email, sub: id };

    return {
      user: {
        id,
        username,
        email,
        isAdmin,
        status,
        cellphone,
        person,
        image,
      },
      access_token: this.jwtService.sign(payload),
    };
  }
}
