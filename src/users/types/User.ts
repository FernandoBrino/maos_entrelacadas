export type UserProps = {
  username: string;
  email: string;
  password: string;
  cellphone: string;

  person: {
    name: string;
    birthdate: string;

    gender: {
      name: string;
    };
  };
};
