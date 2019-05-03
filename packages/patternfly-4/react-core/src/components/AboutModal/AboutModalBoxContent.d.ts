import { FunctionComponent, HTMLProps, ReactNode } from 'react';

export interface AboutModalBoxContentProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
  trademark: string;
  id: string;
}

declare const AboutModalBoxContent: FunctionComponent<AboutModalBoxContentProps>;

export default AboutModalBoxContent;
