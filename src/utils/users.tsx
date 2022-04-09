export interface UserInterface {
  login: string;
  password: string;
  isAdmin: boolean;
}

const users: UserInterface[] = [
  {
    login: "user",
    password: "pass",
    isAdmin: false,
  },
  {
    login: "admin",
    password: "pass1",
    isAdmin: true,
  },
];

export default users;
