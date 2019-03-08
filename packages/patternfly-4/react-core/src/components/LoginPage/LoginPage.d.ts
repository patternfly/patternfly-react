import { FunctionComponent, HTMLProps, ReactNode } from 'react';
import { OneOf } from '../../helpers/typeUtils';
import { BackgroundImageSrcMap } from '../BackgroundImage';

export const LoginListVariant: {
  grid: 'grid';
  inline: 'inline';
};

export interface LoginPageProps extends HTMLProps<HTMLElement> {
  children?: ReactNode;
  className?: string;
  brandImgSrc?: string;
  brandImgAlt?: string;
  backgroundImgSrc?: string | BackgroundImageSrcMap;
  backgroundImgAlt?: string;
  textContent?: string;
  footerListItems?: ReactNode;
  footerListVariants?: OneOf<typeof LoginListVariant, keyof typeof LoginListVariant>;
  loginTitle: string;
  signUpForAccountMessage?: ReactNode;
  forgotCredentials?: ReactNode;
  socialMediaLoginContent?: ReactNode;
}

declare const LoginPage: FunctionComponent<LoginPageProps>;

export default LoginPage;
