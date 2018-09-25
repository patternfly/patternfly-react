import { SFC, HTMLProps, ReactNode } from 'react';
import { OneOf } from '../../typeUtils';

export const PageLayouts: {
  vertical: 'vertical';
  horizontal: 'horizontal';
};

export interface PageProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
  layout?: OneOf<typeof PageLayouts, keyof typeof PageLayouts>;
  background?: ReactNode;
  logo?: ReactNode;
  nav?: ReactNode;
  isNavOpen?: boolean;
  onNavToggle?: Function;
  toolbar?: ReactNode;
  avatar?: ReactNode;
}

declare const Page: SFC<PageProps>;

export default Page;
