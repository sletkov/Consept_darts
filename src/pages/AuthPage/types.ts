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

export type RegisterFormTypes = {
  username: string,
  first_name: string,
  last_name: string,
  additional_name: string,
  avatar_image: string,
  date_of_birth: string,
  phone_number: string,
  password: string,
  email: string
}

export type RegisterContainerType = {
  onSubmit: (values: RegisterFormTypes) => void,
}




