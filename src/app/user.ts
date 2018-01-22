export class User {
  username: string;
  joined: number;
  profile: Profile;
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
  firstName: string;
  lastName: string;
  phone: string;
}

export class ServerFormattedUser{
  credentials: Credentials;
  profile: Profile;
}
