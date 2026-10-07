export type UserLogInBody = {
  email: string;
  password: string;
};

export type UserLogInResponse = {
  message: string;
  token: string;
};
