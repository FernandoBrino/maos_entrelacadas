import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Gender, Person, User } from 'src/typeorm';
import { UserProps } from 'src/users/types/User';
import { encodePassword } from 'src/utils/bcrypt';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(Person)
    private readonly personRepository: Repository<Person>,
    @InjectRepository(Gender)
    private readonly genderRepository: Repository<Gender>,
    private jwtService: JwtService,
  ) {}

  getUsers() {
    return this.userRepository.find();
  }

  async createUser(userProps: UserProps) {
    const usernameAlreadyExists = await this.findUserByUsername(
      userProps.username,
    );

    if (usernameAlreadyExists) {
      throw new BadRequestException('Username already taken!');
    }

    const password = encodePassword(userProps.password);

    const newUser = this.userRepository.create({
      ...userProps,
      password,
    });

    const newPerson = this.personRepository.create({
      ...userProps.person,
    });

    const gender = await this.genderRepository.findOne({
      where: { name: userProps.person.gender.name },
    });

    newUser.person = newPerson;
    newUser.person.gender = gender;

    await this.personRepository.save(newPerson);
    const userCreated = await this.userRepository.save(newUser);

    const payload = { email: userCreated.email, sub: userCreated.id };

    return {
      userCreated,
      access_token: this.jwtService.sign(payload),
    };
  }

  findUserByUsername(username: string) {
    return this.userRepository.findOne({ where: { username } });
  }

  findUserByEmail(email: string) {
    return this.userRepository.findOne({ where: { email } });
  }
}
