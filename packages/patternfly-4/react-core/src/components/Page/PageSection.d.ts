import { FunctionComponent, HTMLProps, ReactNode } from 'react';
import { OneOf } from '../../helpers/typeUtils';

export const PageSectionVariants: {
  default: 'default';
  light: 'light';
  dark: 'dark';
  darker: 'darker';
};

export const PageSectionTypes: {
  default: 'default';
  nav: 'nav';
};

export interface PageSectionProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
  variant?: OneOf<typeof PageSectionVariants, keyof typeof PageSectionVariants>;
  type?: OneOf<typeof PageSectionTypes, keyof typeof PageSectionTypes>;
  isFilled?: boolean;
  noPadding?: boolean;
  noPaddingMobile?: boolean;
}

declare const PageSection: FunctionComponent<PageSectionProps>;

export default PageSection;
