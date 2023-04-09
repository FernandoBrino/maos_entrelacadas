import { BadRequestException, Injectable } from '@nestjs/common';
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
  ) {}

  getUsers() {
    return this.userRepository.find();
  }

  async createUser(userProps: UserProps) {
    const usernameAlreadyExists = this.findUserByUsername(userProps.username);

    if (!usernameAlreadyExists) {
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

    const newGender = this.genderRepository.create({
      ...userProps.person.gender,
    });

    newUser.person = newPerson;
    newUser.person.gender = newGender;

    await this.genderRepository.save(newGender);
    await this.personRepository.save(newPerson);
    const userCreated = await this.userRepository.save(newUser);

    return userCreated;
  }

  findUserByUsername(username: string) {
    return this.userRepository.findOne({ where: { username } });
  }

  findUserByEmail(email: string) {
    return this.userRepository.findOne({ where: { email } });
  }
}
