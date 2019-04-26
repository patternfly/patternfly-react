import { FunctionComponent, HTMLProps, ReactNode } from 'react';

export interface PageProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
  header?: ReactNode;
  sidebar?: ReactNode;
  skipToContent?: ReactNode,
  isManagedSidebar?: boolean;
  onPageResize?: Function;
  breadcrumb?: ReactNode;
}

declare const Page: FunctionComponent<PageProps>;

export default Page;
