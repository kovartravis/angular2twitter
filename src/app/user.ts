export class User {
  username: string;
  joined: number;
  profile: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
}

export class NewUser{
  email: string;
  fullname: string;
  username: string;
  password: string;
}

export class Credentials{
  username: string;
  password: string;
};

export class Profile{
  email: string;
}

export class ServerFormattedUser{
  credentials: Credentials;
  profile: Profile;
}
