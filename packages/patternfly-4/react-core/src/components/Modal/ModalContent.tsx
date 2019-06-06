import * as React from 'react';

// Can't use ES6 imports :(
// The types for it are also wrong, we should probably ditch this dependency.
// tslint:disable-next-line
const FocusTrap: any = require('focus-trap-react');

import styles from '@patternfly/react-styles/css/layouts/Bullseye/bullseye';
import { css } from '@patternfly/react-styles';

import Backdrop from '../Backdrop/Backdrop';
import { ModalBoxBody } from './ModalBoxBody';
import { ModalBoxHeader } from './ModalBoxHeader';
import { ModalBoxCloseButton } from './ModalBoxCloseButton';
import { ModalBox } from './ModalBox';
import { ModalBoxFooter } from './ModalBoxFooter';

export interface ModalContentProps {
  /** Content rendered inside the Modal. */
  children: React.ReactNode;
  /** Additional classes added to the button */
  className?: string;
  /** Creates a large version of the Modal */
  isLarge?: boolean;
  /** Creates a small version of the Modal */
  isSmall?: boolean;
  /** Flag to show the modal */
  isOpen?: boolean;
  /** Content of the Modal Header */
  title: string;
  /** Flag to show the title */
  hideTitle?: boolean;
  /** Default width of the content. */
  width?: number | string;
  /** Content of the Modal Footer */
  actions?: any,
  /** A callback for when the close button is clicked */
  onClose?: () => void;
  /** Id to use for Modal Box description */
  ariaDescribedById?: string;
  /** Id of the ModalBoxBody */
  id: string;
}

export const ModalContent: React.FunctionComponent<ModalContentProps> = ({
  children,
  className = '',
  isOpen = false,
  title,
  hideTitle = false,
  actions = [],
  onClose = () => undefined as any,
  isLarge = false,
  isSmall = false,
  width = -1,
  ariaDescribedById = '',
  id = '',
  ...props
}) => {
  const modalBoxHeader = <ModalBoxHeader hideTitle={hideTitle}> {title} </ModalBoxHeader>;
  const modalBoxFooter = actions.length > 0 && <ModalBoxFooter> {actions} </ModalBoxFooter>;
  if (!isOpen) {
    return null;
  }

  const boxStyle = width === -1 ? {} : { width };

  return (
    <Backdrop>
      <FocusTrap focusTrapOptions={{ clickOutsideDeactivates: true }} className={css(styles.bullseye)}>
        <ModalBox
          style={boxStyle}
          className={className}
          isLarge={isLarge}
          isSmall={isSmall}
          title={title}
          id={ariaDescribedById || id}
        >
          <ModalBoxCloseButton onClose={onClose} />
          {modalBoxHeader}
          <ModalBoxBody {...props} id={id}>
            {children}
          </ModalBoxBody>
          {modalBoxFooter}
        </ModalBox>
      </FocusTrap>
    </Backdrop>
  );
};
