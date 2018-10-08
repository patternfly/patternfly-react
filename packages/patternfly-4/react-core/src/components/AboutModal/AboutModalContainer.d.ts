import { SFC, HTMLProps, ReactNode } from 'react';

export interface AboutModalContainerProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
  ariaLablledbyId: string;
  ariaDescribedById: string;
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

declare const AboutModalContainer: SFC<AboutModalContainerProps>;

export default AboutModalContainer;
