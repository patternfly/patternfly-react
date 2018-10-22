import { SFC, HTMLProps, ReactNode } from 'react';
import { OneOf } from '../../typeUtils';

export const LoginListVariant: {
  grid: 'grid';
  inline: 'inline';
};

export interface LoginPageProps extends HTMLProps<HTMLElement> {
  children?: ReactNode;
  className?: string;
  loginBrandImgSrc: string;
  loginBrandImgAlt: string;
  loginBackgroundImgSrc: string;
  loginBackgroundImgAlt: string;
  loginLanguageDropdown: ReactNode;
  loginTextContent: string;
  loginTitle: string;
  loginSubtitle: ReactNode;
  loginListItems: ReactNode;
  loginFooterContent?: ReactNode;
  loginListVariants: OneOf<typeof LoginListVariant, keyof typeof LoginListVariant>;
}

declare const LoginPage: SFC<LoginPageProps>;

export default LoginPage;
