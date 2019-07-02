import * as React from 'react';

// tslint:disable-next-line
const FocusTrap: any = require('focus-trap-react');

import styles from '@patternfly/react-styles/css/layouts/Bullseye/bullseye';
import { css } from '@patternfly/react-styles';

import { AboutModalBoxContent } from './AboutModalBoxContent';
import { AboutModalBoxHeader } from './AboutModalBoxHeader';
import { AboutModalBoxHero } from './AboutModalBoxHero';
import { AboutModalBoxBrand } from './AboutModalBoxBrand';
import { AboutModalBoxCloseButton } from './AboutModalBoxCloseButton';
import { AboutModalBox } from './AboutModalBox';
import { Backdrop } from '../Backdrop/Backdrop';

export interface AboutModalContainerProps extends React.HTMLProps<HTMLDivElement> {
  /** content rendered inside the About Modal Box Content.  */
  children: React.ReactNode;
  /** additional classes added to the About Modal Box  */
  className?: string;
  /** Flag to show the About Modal  */
  isOpen?: boolean;
  /** A callback for when the close button is clicked  */
  onClose?: () => void;
  /** Product Name  */
  productName?: string;
  /** Trademark information  */
  trademark?: string;
  /** the URL of the image for the Brand.  */
  brandImageSrc: string;
  /** the alternate text of the Brand image.  */
  brandImageAlt: string;
  /** the URL of the image for the background.  */
  backgroundImageSrc?: string;
  /** id to use for About Modal Box aria labeled by  */
  ariaLabelledbyId: string;
  /** id to use for About Modal Box aria described by  */
  ariaDescribedById: string;
};

export const AboutModalContainer: React.SFC<AboutModalContainerProps> = ({
  children,
  className = '',
  isOpen = false,
  onClose = () => undefined,
  productName = '',
  trademark,
  brandImageSrc,
  brandImageAlt,
  backgroundImageSrc,
  ariaLabelledbyId,
  ariaDescribedById,
  ...props
}: AboutModalContainerProps) => {
  if (!isOpen) {
    return null;
  }
  return (
    <Backdrop>
      <FocusTrap focusTrapOptions={{ clickOutsideDeactivates: true }} className={css(styles.bullseye)}>
        <AboutModalBox className={className} aria-labelledby={ariaLabelledbyId} aria-describedby={ariaDescribedById}>
          <AboutModalBoxBrand src={brandImageSrc} alt={brandImageAlt} />
          <AboutModalBoxCloseButton onClose={onClose} />
          {productName && <AboutModalBoxHeader id={ariaLabelledbyId} productName={productName} />}
          <AboutModalBoxContent trademark={trademark} id={ariaDescribedById} noAboutModalBoxContentContainer={false} {...props}>
            {children}
          </AboutModalBoxContent>
          <AboutModalBoxHero backgroundImageSrc={backgroundImageSrc} />
        </AboutModalBox>
      </FocusTrap>
    </Backdrop>
  );
};
