export interface LoginPage {
  loginTitle: string;
  rememberMe: string;
  signinBtn: string;
  signupLink: string;
  forgotPassword: string;
}
export interface SignUpPage {
  signupTitle: string;
  signupBtn: string;
  signinLink: string;
}
export interface Appbar {
  Profile: string;
  Account: string;
  Document: string;
  Logout: string;
}

export interface LocalizationInterface {
  loginPage: LoginPage;
  signUpPage: SignUpPage;
  appBar: Appbar;
}
