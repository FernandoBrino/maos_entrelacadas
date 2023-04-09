export type UserProps = {
  username: string;
  email: string;
  password: string;
  cellphone: string;

  person: {
    name: string;
    birthDate: string;

    gender: {
      name: string;
    };
  };
};
