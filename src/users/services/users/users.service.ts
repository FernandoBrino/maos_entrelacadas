import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { AwsS3Service } from 'src/shared/services/aws-s3.service';
import { ValidatorService } from 'src/shared/services/validator.service';
import { Address, Gender, Image, Person, User } from 'src/typeorm';
import { CreateUserDto } from 'src/users/dtos/CreateUser/CreateUser.dto';
import { UpdateUserDto } from 'src/users/dtos/UpdateUser/UpdateUser.dto';
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
    @InjectRepository(Address)
    private readonly addressRepository: Repository<Address>,
    private jwtService: JwtService,
    private validatorService: ValidatorService,
    private awsS3Service: AwsS3Service,
  ) {}

  getUsers() {
    return this.userRepository.find();
  }

  async createUser(userProps: CreateUserDto) {
    const usernameAlreadyExists = await this.findUserByUsername(
      userProps.username,
    );
    const emailAlreadyTaken = await this.findUserByEmail(userProps.email);

    if (usernameAlreadyExists) {
      throw new BadRequestException('Username already taken!');
    } else if (emailAlreadyTaken) {
      throw new BadRequestException('Email already taken!');
    }

    const password = encodePassword(userProps.password);

    const newUser = this.userRepository.create({
      ...userProps,
      password,
    });

    const newPerson = this.personRepository.create({
      ...userProps.person,
    });

    const newGender = await this.genderRepository.findOne({
      where: { name: userProps.person.gender.name },
    });

    if (userProps.image) {
      const newImage = this.imageRepository.create({
        ...userProps.image,
      });

      newUser.image = newImage;
      await this.imageRepository.save(newImage);
    }

    newUser.person = newPerson;
    newUser.person.gender = newGender;

    await this.personRepository.save(newPerson);
    const user = await this.userRepository.save(newUser);

    const payload = { email: user.email, sub: user.id };

    return {
      user,
      access_token: this.jwtService.sign(payload),
    };
  }

  async updateUser(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOne({ where: { id } });

    if (!user) {
      throw new Error("User doesn't exists!");
    }

    if (
      updateUserDto.image &&
      !this.validatorService.isImage(updateUserDto.image.url)
    ) {
      throw new Error('Invalid image!');
    }

    const updatedUser = this.userRepository.create({
      ...user,
      ...updateUserDto,
      updatedAt: updateUserDto && new Date(),
    });

    const updatedImage = this.imageRepository.create({
      ...user.image,
      ...updateUserDto.image,
      updatedAt: updateUserDto.image && new Date(),
    });

    const updatedPerson = this.personRepository.create({
      ...user.person,
      ...updateUserDto.person,
      updatedAt: updateUserDto.person && new Date(),
    });

    const updatedAddress = this.addressRepository.create({
      ...user.person.address,
      ...updateUserDto.person.address,
      updatedAt: updateUserDto.person.address && new Date(),
    });

    const updatedGender =
      (await this.genderRepository.findOne({
        where: { name: updateUserDto.person.gender.name },
      })) ?? user.person.gender;

    updatedUser.image = updatedImage;
    updatedUser.person = updatedPerson;
    updatedUser.person.address = updatedAddress;
    updatedUser.person.gender = updatedGender;

    await this.userRepository.update(id, updatedUser);

    return updatedUser;
  }

  findUserByUsername(username: string) {
    return this.userRepository.findOne({ where: { username } });
  }

  findUserByEmail(email: string) {
    return this.userRepository.findOne({ where: { email } });
  }
}
