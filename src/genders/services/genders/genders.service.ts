import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenderProps } from 'src/genders/types/CreateGender';
import { Gender } from 'src/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class GendersService {
  constructor(
    @InjectRepository(Gender)
    private readonly genderRepository: Repository<Gender>,
  ) {}

  getGenders() {
    return this.genderRepository.find();
  }

  createGender(name: GenderProps) {
    const newGender = this.genderRepository.create(name);

    return this.genderRepository.save(newGender);
  }
}
