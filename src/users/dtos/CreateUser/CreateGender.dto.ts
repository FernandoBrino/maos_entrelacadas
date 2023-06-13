import { IsEnum } from 'class-validator';

enum Gender {
  HETEROSEXUAL = 'Heterossexual',
  HOMOSEXUAL = 'Homossexual',
  BISEXUAL = 'Bissexual',
  ASEXUAL = 'Assexual',
  PANSEXUAL = 'Pansexual',
  TRANSEXUAL = 'Transexual',
  OTHER = 'Outro',
  PREFER_NOT_SAY = 'Prefiro não dizer',
}

export class CreateGenderDto {
  @IsEnum(Gender)
  name: Gender;
}
