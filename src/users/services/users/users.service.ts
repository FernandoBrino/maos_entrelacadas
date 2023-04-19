import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Gender, Image, Person, User } from 'src/typeorm';
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
    @InjectRepository(Image)
    private readonly imageRepository: Repository<Image>,
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

    const newImage = this.imageRepository.create({
      ...userProps.image,
    });

    const newPerson = this.personRepository.create({
      ...userProps.person,
    });

    const newGender = await this.genderRepository.findOne({
      where: { name: userProps.person.gender.name },
    });

    newUser.image = newImage;
    newUser.person = newPerson;
    newUser.person.gender = newGender;

    await this.imageRepository.save(newImage);
    await this.personRepository.save(newPerson);
    const user = await this.userRepository.save(newUser);

    const payload = { email: user.email, sub: user.id };

    return {
      user,
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
