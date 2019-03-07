import React, { FunctionComponent, ReactNode, MouseEvent } from 'react';
import AboutModalBoxContent from './AboutModalBoxContent';
import AboutModalBoxHeader from './AboutModalBoxHeader';
import AboutModalBoxHero from './AboutModalBoxHero';
import AboutModalBoxBrand from './AboutModalBoxBrand';
import AboutModalBoxCloseButton from './AboutModalBoxCloseButton';
import AboutModalBox from './AboutModalBox';
import Backdrop from '../Backdrop/Backdrop';
import Bullseye from '../../layouts/Bullseye/Bullseye';

export interface AboutModalContainerProps {
  /** content rendered inside the About Modal Box Content. */
  children: ReactNode;
  /** additional classes added to the About Modal Box */
  className?: string;
  /** Flag to show the About Modal */
  isOpen?: boolean;
  /** A callback for when the close button is clicked */
  onClose?(event: MouseEvent<HTMLButtonElement>): void;
  /** Product Name */
  productName: string;
  /** Trademark information */
  trademark: string;
  /** the URL of the image for the Brand. */
  brandImageSrc: string;
  /** the alternate text of the Brand image. */
  brandImageAlt: string;
  /** the URL of the image for the Logo. */
  logoImageSrc: string;
  /** the alternate text of the Logo image. */
  logoImageAlt: string;
  /** id to use for About Modal Box aria labeled by */
  ariaLabelledbyId: string;
  /** id to use for About Modal Box aria described by */
  ariaDescribedById: string;
};

const defaultProps = {
  className: '',
  isOpen: false,
  onClose: () => undefined
};

const ModalContent: FunctionComponent<AboutModalContainerProps> = ({
  children,
  className,
  isOpen,
  onClose,
  productName,
  trademark,
  brandImageSrc,
  brandImageAlt,
  logoImageSrc,
  logoImageAlt,
  ariaLabelledbyId,
  ariaDescribedById,
  ...props
}: AboutModalContainerProps) => {
  if (!isOpen) {
    return null;
  }
  /** Additional props are spread to the AboutModalBoxContent component */
  return (
    <Backdrop>
      <Bullseye>
        <AboutModalBox className={className} ariaLabelledbyId={ariaLabelledbyId} ariaDescribedById={ariaDescribedById}>
          <AboutModalBoxBrand src={brandImageSrc} alt={brandImageAlt} />
          <AboutModalBoxCloseButton onClose={onClose} />
          <AboutModalBoxHeader id={ariaLabelledbyId} productName={productName} />
          <AboutModalBoxContent {...props} trademark={trademark} id={ariaDescribedById}>
            {children}
          </AboutModalBoxContent>
          <AboutModalBoxHero />
        </AboutModalBox>
      </Bullseye>
    </Backdrop>
  );
};

ModalContent.defaultProps = defaultProps;

export default ModalContent;
