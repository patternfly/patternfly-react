import { SFC, HTMLProps, ReactNode } from 'react';
import { OneOf } from '../../typeUtils';

export const PageSectionVariants: {
  default: 'default';
  light: 'light';
  dark: 'dark';
  darker: 'darker';
};

export interface PageSectionProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
  variant?: OneOf<typeof PageSectionVariants, keyof typeof PageSectionVariants>;
}

declare const PageSection: SFC<PageSectionProps>;

export default PageSection;
