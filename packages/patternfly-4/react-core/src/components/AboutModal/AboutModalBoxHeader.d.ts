import { FunctionComponent, HTMLProps } from 'react';

export interface AboutModalBoxHeaderProps extends HTMLProps<HTMLDivElement> {
  productName: string;
  tradeMark: string;
  id: string;
}

declare const AboutModalBoxHeader: FunctionComponent<AboutModalBoxHeaderProps>;

export default AboutModalBoxHeader;
