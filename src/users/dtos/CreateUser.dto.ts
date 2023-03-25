import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { User } from '../typeorm/User';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: 'Olivia Rodrigo',
    description: `O username será utilizado para qualquer coisa (Perfil, Home Page, etc) que precise exibir informações da pessoa conectada.`,
  })
  username: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: '123@abc',
    description: `É possível conectar com redes sociais sem uma senha, mas para login usando o e-mail diretamente é necessário informar uma senha.`,
  })
  password: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: '1',
    description: 'Informar o tipo do usuario',
  })
  status: string;

  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }
}
