import * as React from 'react';
import { FocusTrap } from '../../helpers';
import titleStyles from '@patternfly/react-styles/css/components/Title/title';
import bullsEyeStyles from '@patternfly/react-styles/css/layouts/Bullseye/bullseye';
import { css } from '@patternfly/react-styles';

import { Backdrop } from '../Backdrop/Backdrop';
import { ModalBoxBody } from './ModalBoxBody';
import { ModalBoxCloseButton } from './ModalBoxCloseButton';
import { ModalBox } from './ModalBox';
import { ModalBoxFooter } from './ModalBoxFooter';
import { ModalBoxDescription } from './ModalBoxDescription';
import { ModalBoxHeader } from './ModalBoxHeader';

export interface ModalContentProps {
  /** Content rendered inside the Modal. */
  children: React.ReactNode;
  /** Additional classes added to the button */
  className?: string;
  /** Variant of the modal */
  variant?: 'small' | 'large' | 'default';
  /** Flag to show the modal */
  isOpen?: boolean;
  /** Complex header (more than just text), supersedes title for header content */
  header?: React.ReactNode;
  /** Description of the modal */
  description?: React.ReactNode;
  /** Simple text content of the Modal Header, also used for aria-label on the body */
  title?: string;
  /** Accessible descriptor of modal */
  'aria-label'?: string;
  /** Flag to show the close button in the header area of the modal */
  showClose?: boolean;
  /** Default width of the content. */
  width?: number | string;
  /** Custom footer */
  footer?: React.ReactNode;
  /** Action buttons to add to the standard Modal Footer, ignored if `footer` is given */
  actions?: any;
  /** A callback for when the close button is clicked */
  onClose?: () => void;
  /** Id to use for Modal Box descriptor */
  modalBoxAriaDescribedById?: string;
  /** Id of the ModalBoxBody */
  id: string;
  /** Flag to disable focus trap */
  disableFocusTrap?: boolean;
  /** Flag indicating if modal content should have no padding*/
  noPadding?: boolean;
}

export const ModalContent: React.FunctionComponent<ModalContentProps> = ({
  children,
  className = '',
  isOpen = false,
  header = null,
  description = null,
  title = '',
  'aria-label': ariaLabel = '',
  showClose = true,
  footer = null,
  actions = [],
  onClose = () => undefined as any,
  variant = 'default',
  width = -1,
  modalBoxAriaDescribedById = '',
  id = '',
  disableFocusTrap = false,
  noPadding = false,
  ...props
}: ModalContentProps) => {
  if (!isOpen) {
    return null;
  }

  const modalBoxHeader = header ? (
    <div className={css(titleStyles.title)}>{header}</div>
  ) : (
    title && <ModalBoxHeader>{title}</ModalBoxHeader>
  );

  const modalBoxFooter = footer ? (
    <ModalBoxFooter>{footer}</ModalBoxFooter>
  ) : (
    actions.length > 0 && <ModalBoxFooter>{actions}</ModalBoxFooter>
  );

  const modalBody = noPadding ? (
    children
  ) : (
    <ModalBoxBody {...props} {...(!description && { id })}>
      {children}
    </ModalBoxBody>
  );
  const boxStyle = width === -1 ? {} : { width };

  const modalBox = (
    <ModalBox
      style={boxStyle}
      className={className}
      variant={variant}
      title={title}
      aria-label={ariaLabel}
      id={modalBoxAriaDescribedById || id}
    >
      {showClose && <ModalBoxCloseButton onClose={onClose} />}
      {modalBoxHeader}
      {description && <ModalBoxDescription id={id}>{description}</ModalBoxDescription>}
      {modalBody}
      {modalBoxFooter}
    </ModalBox>
  );
  return (
    <Backdrop>
      <FocusTrap
        active={!disableFocusTrap}
        focusTrapOptions={{ clickOutsideDeactivates: true }}
        className={css(bullsEyeStyles.bullseye)}
      >
        {modalBox}
      </FocusTrap>
    </Backdrop>
  );
};
