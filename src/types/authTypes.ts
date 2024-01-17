export interface RegisterUser {
  name:string,
  email: string,
  password: string,
}

export interface LoginUser {
  email: string,
  password: string,
}

export interface ForgotPassword {
  email: string,
}

export interface ResetPassword {
  password: string,
}



