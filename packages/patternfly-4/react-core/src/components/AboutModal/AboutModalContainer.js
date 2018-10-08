import React from 'react';
import PropTypes from 'prop-types';
import AboutModalBoxContent from './AboutModalBoxContent';
import AboutModalBoxHeader from './AboutModalBoxHeader';
import AboutModalBoxHero from './AboutModalBoxHero';
import AboutModalBoxLogo from './AboutModalBoxLogo';
import AboutModalBoxBrand from './AboutModalBoxBrand';
import AboutModalBoxCloseButton from './AboutModalBoxCloseButton';
import AboutModalBox from './AboutModalBox';
import Backdrop from '../Backdrop/Backdrop';
import Bullseye from '../../layouts/Bullseye/Bullseye';

const propTypes = {
  /** content rendered inside the About Modal Box Content. */
  children: PropTypes.node.isRequired,
  /** additional classes added to the About Modal Box */
  className: PropTypes.string,
  /** Flag to show the About Modal */
  isOpen: PropTypes.bool,
  /** A callback for when the close button is clicked */
  onClose: PropTypes.func,
  /** Product Name */
  productName: PropTypes.string.isRequired,
  /** Trademark information */
  trademark: PropTypes.string.isRequired,
  /** the URL of the image for the Brand. */
  brandImageSrc: PropTypes.string.isRequired,
  /** the alternate text of the Brand image. */
  brandImageAlt: PropTypes.string.isRequired,
  /** the URL of the image for the Logo. */
  logoImageSrc: PropTypes.string.isRequired,
  /** the alternate text of the Logo image. */
  logoImageAlt: PropTypes.string.isRequired,
  /** the URL of the image for the Hero. */
  heroImageSrc: PropTypes.string.isRequired,
  /** the alternate text of the Hero image. */
  heroImageAlt: PropTypes.string,
  /** id to use for About Modal Box aria labeled by */
  ariaLabelledbyId: PropTypes.string.isRequired,
  /** id to use for About Modal Box aria described by */
  ariaDescribedById: PropTypes.string.isRequired
};

const defaultProps = {
  className: '',
  isOpen: false,
  onClose: () => undefined,
  heroImageAlt: ''
};

const ModalContent = ({
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
  heroImageSrc,
  heroImageAlt,
  ariaLabelledbyId,
  ariaDescribedById,
  ...props
}) => {
  if (!isOpen) {
    return null;
  }
  return (
    <Backdrop>
      <Bullseye>
        <AboutModalBox className={className} aria-labelledby={ariaLabelledbyId} aria-describedby={ariaDescribedById}>
          <AboutModalBoxBrand src={brandImageSrc} alt={brandImageAlt} />
          <AboutModalBoxCloseButton onClose={onClose} />
          <AboutModalBoxHeader id={ariaLabelledbyId} productName={productName} trademark={trademark} />
          <AboutModalBoxContent {...props} id={ariaDescribedById}>
            {children}
          </AboutModalBoxContent>
          <AboutModalBoxHero src={heroImageSrc} alt={heroImageAlt} />
          <AboutModalBoxLogo src={logoImageSrc} alt={logoImageAlt} />
        </AboutModalBox>
      </Bullseye>
    </Backdrop>
  );
};

ModalContent.propTypes = propTypes;
ModalContent.defaultProps = defaultProps;

export default ModalContent;
