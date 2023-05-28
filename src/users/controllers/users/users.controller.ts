import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from 'src/users/dtos/CreateUser/CreateUser.dto';
import { UpdateUserDto } from 'src/users/dtos/UpdateUser/UpdateUser.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(
    @Inject('USERS_SERVICE') private readonly usersService: UsersService,
  ) {}

  @Get('')
  @UseInterceptors(ClassSerializerInterceptor)
  getUsers() {
    return this.usersService.getUsers();
  }

  @Get('signupEvents/:id')
  getSignupEventsByUser(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.getSignupEventsByUser(id);
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  @UseInterceptors(ClassSerializerInterceptor)
  createUser(@Body() userDto: CreateUserDto) {
    return this.usersService.createUser(userDto);
  }

  @Put('update/:id')
  @UsePipes(ValidationPipe)
  @UseInterceptors(ClassSerializerInterceptor)
  updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.updateUser(id, updateUserDto);
  }
}
