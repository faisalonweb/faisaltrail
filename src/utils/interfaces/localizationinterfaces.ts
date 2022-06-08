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
export interface AcitivitesTabs {
  title: string;
  subTitle: string;
  sortBy: string;
  uploadBtn: string;
}
export interface TrailPhotos {
  title: string;
  subTitle: string;
  sortBy: string;
  uploadBtn: string;
}
export interface Home {
  findNext: string;
  exploreNear: string;
}
export interface TrailInfo {
  length: string;
  elevation: string;
  route: string;
}

export interface LocalizationInterface {
  loginPage: LoginPage;
  signUpPage: SignUpPage;
  appBar: Appbar;
  activitesTabs: AcitivitesTabs;
  trailPhotos: TrailPhotos;
  home: Home;
  trailInfo: TrailInfo;
}
