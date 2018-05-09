import { SFC, ReactNode } from 'react';
import { ModalProps } from '../Modal';

export interface AboutModalProps extends ModalProps {
  altLogo?: string;
  /** Alternate text if invalid logo */
  closeText?: string;
  /** Image Source for the Product logo */
  logo?: string;
  /** Text or Element to show for the product title */
  productTitle?: ReactNode;
  /** Trademark information text */
  trademarkText?: string;
}

declare const AboutModal: SFC<AboutModalProps>;

export default AboutModal;
