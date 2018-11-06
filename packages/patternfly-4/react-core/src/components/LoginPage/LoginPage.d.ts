import { SFC, HTMLProps, ReactNode } from 'react';
import { OneOf } from '../../typeUtils';

export const LoginListVariant: {
  grid: 'grid';
  inline: 'inline';
};

export interface LoginPageProps extends HTMLProps<HTMLElement> {
  children?: ReactNode;
  className?: string;
  mainBrandImgSrc?: string;
  mainBrandImgAlt?: string;
  mainBackgroundImgSrc?: string;
  mainBackgroundImgAlt?: string;
  mainTextContent?: string;
  mainListItems?: ReactNode;
  mainListVariants?: OneOf<typeof LoginListVariant, keyof typeof LoginListVariant>;
  loginTitle: string;
  loginSubtitle?: ReactNode;
  loginLanguageDropdown?: ReactNode;
  loginFooterContent?: ReactNode;
}

declare const LoginPage: SFC<LoginPageProps>;

export default LoginPage;
