export interface LoginPage {
  Login_Title: string;
  Remember_Me: string;
  Signin_Btn: string;
  Signup_Link: string;
  Forgot_Password: string;
}
export interface SignUpPage {
  Signup_Title: string;
  Signup_Btn: string;
  Signin_Link: string;
}
export interface Appbar {
  Profile: string;
  Account: string;
  Document: string;
  Logout:  string;
}

export interface LocalizationInterface {
  loginPage: LoginPage;
  signUpPage: SignUpPage;
  appBar: Appbar;
}