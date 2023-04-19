export type UserProps = {
  username: string;
  email: string;
  password: string;
  cellphone: string;
  image: {
    url: string;
  };

  person: {
    name: string;
    birthdate: string;

    gender: {
      name: string;
    };
  };
};
