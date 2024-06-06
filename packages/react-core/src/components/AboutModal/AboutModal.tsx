import * as React from 'react';
import { css } from '@patternfly/react-styles';
import backgroundImage from '@patternfly/react-tokens/dist/esm/c_about_modal_box_BackgroundImage';
import { AboutModalBoxContent } from './AboutModalBoxContent';
import { AboutModalBoxHeader } from './AboutModalBoxHeader';
import { AboutModalBoxBrand } from './AboutModalBoxBrand';
import { AboutModalBoxCloseButton } from './AboutModalBoxCloseButton';
import { AboutModalBox } from './AboutModalBox';
import { Modal, ModalVariant } from '../../deprecated/components/Modal';
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
  /** The URL or file path of the image for the background  */
  backgroundImageSrc?: string;
  /** Prevents the about modal from rendering content inside a container; allows for more flexible layouts  */
  hasNoContentContainer?: boolean;
  /** The parent container to append the modal to. Defaults to document.body */
  appendTo?: HTMLElement | (() => HTMLElement);
  /** Aria label for the about modal.  This should be used when no productName prop is provided */
  'aria-label'?: string;
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
  productName,
  trademark,
  backgroundImageSrc,
  brandImageSrc,
  brandImageAlt,
  hasNoContentContainer = false,
  appendTo,
  closeButtonAriaLabel,
  'aria-label': ariaLabel,
  disableFocusTrap,
  ...props
}: AboutModalProps) => {
  if (brandImageSrc && !brandImageAlt) {
    // eslint-disable-next-line no-console
    console.error(
      'AboutModal:',
      'brandImageAlt is required when a brandImageSrc is specified, and should not be an empty string.'
    );
  }

  if (!productName && !ariaLabel) {
    // eslint-disable-next-line no-console
    console.error('AboutModal:', 'Either productName or ariaLabel is required for component to be accessible');
  }

  if (!isOpen) {
    return null;
  }
  return (
    <GenerateId prefix="pf-about-modal-title-">
      {(ariaLabelledBy) => (
        <Modal
          isOpen={isOpen}
          variant={ModalVariant.large}
          {...(productName && { 'aria-labelledby': ariaLabelledBy })}
          aria-label={ariaLabel}
          onEscapePress={onClose}
          showClose={false}
          appendTo={appendTo}
          disableFocusTrap={disableFocusTrap}
          hasNoBodyWrapper
        >
          <AboutModalBox
            style={
              backgroundImageSrc
                ? ({ [backgroundImage.name]: `url(${backgroundImageSrc})` } as React.CSSProperties)
                : {}
            }
            className={css(className)}
          >
            <AboutModalBoxBrand src={brandImageSrc} alt={brandImageAlt} />
            <AboutModalBoxCloseButton aria-label={closeButtonAriaLabel} onClose={onClose} />
            {productName && <AboutModalBoxHeader id={ariaLabelledBy} productName={productName} />}
            <AboutModalBoxContent trademark={trademark} hasNoContentContainer={hasNoContentContainer} {...props}>
              {children}
            </AboutModalBoxContent>
          </AboutModalBox>
        </Modal>
      )}
    </GenerateId>
  );
};
AboutModal.displayName = 'AboutModal';
