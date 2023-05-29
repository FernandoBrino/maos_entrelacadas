import { User } from 'src/typeorm';

export type CreateUserType = {
  user: User;
  access_token: string;
};
