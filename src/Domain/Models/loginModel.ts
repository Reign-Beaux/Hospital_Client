export interface LoginModel {
  username: string;
  password: string;
}

export const loginEmpty: LoginModel = {
  username: "",
  password: "",
};
