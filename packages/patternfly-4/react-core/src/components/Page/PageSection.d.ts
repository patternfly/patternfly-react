import { FunctionComponent, HTMLProps, ReactNode } from 'react';
import { OneOf } from '../../helpers/typeUtils';

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

declare const PageSection: FunctionComponent<PageSectionProps>;

export default PageSection;
