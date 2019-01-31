import { FunctionComponent, HTMLProps, ReactNode } from 'react';

export interface PageProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
  header?: ReactNode;
  sidebar?: ReactNode;
  isManagedSidebar?: boolean;
  onPageResize?: Function;
}

declare const Page: FunctionComponent<PageProps>;

export default Page;
