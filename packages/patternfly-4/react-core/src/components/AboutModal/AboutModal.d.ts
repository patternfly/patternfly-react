import { SFC, HTMLProps, ReactNode } from 'react';

export interface AboutModalProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
  isOpen?: boolean;
  onClose?: Function;
  productName: string;
  trademark: string;
  brandImageSrc: string;
  brandImageAlt: string;
  logoImageSrc: string;
  logoImageAlt: string;
  heroImageSrc: string;
  heroImageAlt?: string;
}

declare const AboutModal: SFC<AboutModalProps>;

export default AboutModal;
