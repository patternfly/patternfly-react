import { FunctionComponent, HTMLProps, ReactNode } from 'react';
import { OneOf } from '../../typeUtils';

export const LoginListVariant: {
  grid: 'grid';
  inline: 'inline';
};

export interface LoginPageProps extends HTMLProps<HTMLElement> {
  children?: ReactNode;
  className?: string;
  brandImgSrc?: string;
  brandImgAlt?: string;
  backgroundImgSrc?: string;
  backgroundImgAlt?: string;
  textContent?: string;
  footerListItems?: ReactNode;
  footerListVariants?: OneOf<typeof LoginListVariant, keyof typeof LoginListVariant>;
  languageSelector?: ReactNode;
  loginTitle: string;
  signUpForAccountMessage?: ReactNode;
  forgotCredentials?: ReactNode;
  socialMediaLoginContent?: ReactNode;
}

declare const LoginPage: FunctionComponent<LoginPageProps>;

export default LoginPage;
