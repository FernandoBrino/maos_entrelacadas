import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateGenderDto } from 'src/genders/dtos/CreateGender.dto';
import { GendersService } from 'src/genders/services/genders/genders.service';

@Controller('genders')
@ApiTags('genders')
export class GendersController {
  constructor(
    @Inject('GENDERS_SERVICE') private gendersService: GendersService,
  ) {}

  @Get('')
  getGenders() {
    return this.gendersService.getGenders();
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  createGender(@Body() genderDto: CreateGenderDto) {
    return this.gendersService.createGender(genderDto);
  }

  @Delete(':id')
  deleteGender(@Param('id') id: number) {
    return this.gendersService.deleteGender(id);
  }
}
