import * as React from 'react';
import { css } from '@patternfly/react-styles';
import { AboutModalBoxContent } from './AboutModalBoxContent';
import { AboutModalBoxHeader } from './AboutModalBoxHeader';
import { AboutModalBoxHero } from './AboutModalBoxHero';
import { AboutModalBoxBrand } from './AboutModalBoxBrand';
import { AboutModalBoxCloseButton } from './AboutModalBoxCloseButton';
import { AboutModalBox } from './AboutModalBox';
import { Modal, ModalVariant } from '../Modal';
import { GenerateId } from '../../helpers/GenerateId/GenerateId';

export interface AboutModalProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside the about modal */
  children: React.ReactNode;
  /** Additional classes added to the about modal */
  className?: string;
  /** Flag to show the about modal  */
  isOpen?: boolean;
  /** A callback for when the close button is clicked  */
  onClose?: (event: React.MouseEvent | MouseEvent | KeyboardEvent) => void;
  /** Product name  */
  productName?: string;
  /** Trademark information  */
  trademark?: string;
  /** The URL of the image for the brand  */
  brandImageSrc: string;
  /** The alternate text of the brand image  */
  brandImageAlt: string;
  /** The URL of the image for the background  */
  backgroundImageSrc?: string;
  /** Prevents the about modal from rendering content inside a container; allows for more flexible layouts  */
  noAboutModalBoxContentContainer?: boolean;
  /** The parent container to append the modal to. Defaults to document.body */
  appendTo?: HTMLElement | (() => HTMLElement);
  /** Set aria label to the close button */
  closeButtonAriaLabel?: string;
  /** Flag to disable focus trap */
  disableFocusTrap?: boolean;
}

export const AboutModal: React.FunctionComponent<AboutModalProps> = ({
  children,
  className,
  isOpen = false,
  onClose = (_e): any => undefined,
  productName = '',
  trademark = '',
  backgroundImageSrc = '',
  brandImageSrc,
  brandImageAlt,
  noAboutModalBoxContentContainer = false,
  appendTo,
  closeButtonAriaLabel,
  disableFocusTrap,
  ...props
}: AboutModalProps) => {
  if (brandImageSrc && !brandImageAlt) {
    // eslint-disable-next-line no-console
    console.error('AboutModal:', 'brandImageAlt is required when a brandImageSrc is specified');
  }

  if (!isOpen) {
    return null;
  }
  return (
    <GenerateId prefix="pf-about-modal-title-">
      {ariaLabelledBy => (
        <Modal
          isOpen={isOpen}
          variant={ModalVariant.large}
          aria-labelledby={ariaLabelledBy}
          onEscapePress={onClose}
          showClose={false}
          appendTo={appendTo}
          disableFocusTrap={disableFocusTrap}
          hasNoBodyWrapper
        >
          <AboutModalBox className={css(className)}>
            <AboutModalBoxBrand src={brandImageSrc} alt={brandImageAlt} />
            <AboutModalBoxCloseButton aria-label={closeButtonAriaLabel} onClose={onClose} />
            {productName && <AboutModalBoxHeader id={ariaLabelledBy} productName={productName} />}
            <AboutModalBoxContent
              trademark={trademark}
              noAboutModalBoxContentContainer={noAboutModalBoxContentContainer}
              {...props}
            >
              {children}
            </AboutModalBoxContent>
            <AboutModalBoxHero backgroundImageSrc={backgroundImageSrc} />
          </AboutModalBox>
        </Modal>
      )}
    </GenerateId>
  ) as React.ReactElement;
};
AboutModal.displayName = 'AboutModal';
