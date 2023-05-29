import { User } from 'src/typeorm';

export type Login = {
  user: User;
  access_token: string;
};
