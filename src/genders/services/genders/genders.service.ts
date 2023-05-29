import { Injectable, NotFoundException } from '@nestjs/common';
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

  getGenders(): Promise<Gender[]> {
    return this.genderRepository.find();
  }

  createGender(name: GenderProps): Promise<Gender> {
    const newGender = this.genderRepository.create(name);

    return this.genderRepository.save(newGender);
  }

  async deleteGender(id: number): Promise<void> {
    const gender = await this.genderRepository.findOne({ where: { id } });

    if (!gender) {
      throw new NotFoundException('Gender not found');
    }

    await this.genderRepository.remove(gender);
  }
}
