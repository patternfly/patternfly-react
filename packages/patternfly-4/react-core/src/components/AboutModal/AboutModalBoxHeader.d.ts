import { SFC, HTMLProps } from 'react';

export interface AboutModalBoxHeaderProps extends HTMLProps<HTMLDivElement> {
  productName: string;
  tradeMark: string;
  id: string;
}

declare const AboutModalBoxHeader: SFC<AboutModalBoxHeaderProps>;

export default AboutModalBoxHeader;
