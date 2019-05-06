import { FunctionComponent, HTMLProps, ReactNode } from 'react';

export interface AboutModalProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
  isOpen?: boolean;
  onClose?: Function;
  productName?: string;
  trademark?: string;
  brandImageSrc: string;
  brandImageAlt: string;
  backgroundImageSrc?: string;
  noAboutModalBoxContentContainer?: boolean;
}

declare const AboutModal: FunctionComponent<AboutModalProps>;

export default AboutModal;
