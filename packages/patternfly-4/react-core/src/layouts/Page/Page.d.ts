import { SFC, HTMLProps, ReactNode } from 'react';
import { OneOf } from '../../typeUtils';

export interface PageProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
  header?: ReactNode;
  sidebar?: ReactNode;
  useCondensed?: boolean;
  scrollingDistance?: number;
  scrollingDebounce?: number;
  getRef?: Function;
}

declare const Page: SFC<PageProps>;

export default Page;
