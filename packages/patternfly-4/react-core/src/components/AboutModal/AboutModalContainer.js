import React from 'react';
import PropTypes from 'prop-types';
import AboutModalBoxContent from './AboutModalBoxContent';
import AboutModalBoxHeader from './AboutModalBoxHeader';
import AboutModalBoxHero from './AboutModalBoxHero';
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
  productName: PropTypes.string,
  /** Trademark information */
  trademark: PropTypes.string.isRequired,
  /** the URL of the image for the Brand. */
  brandImageSrc: PropTypes.string.isRequired,
  /** the alternate text of the Brand image. */
  brandImageAlt: PropTypes.string.isRequired,
  /** the URL of the image for the background. */
  backgroundImageSrc: PropTypes.string,
  /** id to use for About Modal Box aria labeled by */
  ariaLabelledbyId: PropTypes.string.isRequired,
  /** id to use for About Modal Box aria described by */
  ariaDescribedById: PropTypes.string.isRequired,
  /** Additional props are spread to the AboutModalBoxContent component */
  '': PropTypes.any
};

const defaultProps = {
  className: '',
  isOpen: false,
  onClose: () => undefined,
  productName: ''
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
  backgroundImageSrc,
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
          {productName && <AboutModalBoxHeader id={ariaLabelledbyId} productName={productName} />}
          <AboutModalBoxContent {...props} trademark={trademark} id={ariaDescribedById}>
            {children}
          </AboutModalBoxContent>
          <AboutModalBoxHero backgroundImageSrc={backgroundImageSrc} />
        </AboutModalBox>
      </Bullseye>
    </Backdrop>
  );
};

ModalContent.propTypes = propTypes;
ModalContent.defaultProps = defaultProps;

export default ModalContent;
