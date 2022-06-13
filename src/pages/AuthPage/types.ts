export enum AuthPageContainerTypes {
  Login = 'login',
  Register = 'register'
}

export type AuthContainerType = {
  onSubmit: (values: LoginFormTypes) => void,
  onChangePage: (path: AuthPageContainerTypes) => void
}

export type LoginFormTypes = {
  username: string;
  password: string
}