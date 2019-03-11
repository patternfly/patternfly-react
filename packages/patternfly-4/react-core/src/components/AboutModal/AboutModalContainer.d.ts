import { FunctionComponent, HTMLProps, ReactNode } from 'react';

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
}

declare const AboutModalContainer: FunctionComponent<AboutModalContainerProps>;

export default AboutModalContainer;
