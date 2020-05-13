import * as React from 'react';
import { FocusTrap } from '../../helpers';
import modalStyles from '@patternfly/react-styles/css/components/ModalBox/modal-box';
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
  /** Id of Modal Box label */
  'aria-labelledby'?: string | null;
  /** Accessible descriptor of modal */
  'aria-label'?: string;
  /** Id of Modal Box description */
  'aria-describedby'?: string;
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
  /** Id of the ModalBox container */
  boxId: string;
  /** Id of the ModalBox title */
  labelId: string;
  /** Id of the ModalBoxBody */
  descriptorId: string;
  /** Flag to disable focus trap */
  disableFocusTrap?: boolean;
  /** Flag indicating if modal content should be placed in a modal box body wrapper */
  hasNoBodyWrapper?: boolean;
}

export const ModalContent: React.FunctionComponent<ModalContentProps> = ({
  children,
  className = '',
  isOpen = false,
  header = null,
  description = null,
  title = '',
  'aria-label': ariaLabel = '',
  'aria-describedby': ariaDescribedby,
  'aria-labelledby': ariaLabelledby,
  showClose = true,
  footer = null,
  actions = [],
  onClose = () => undefined as any,
  variant = 'default',
  width = -1,
  boxId,
  labelId,
  descriptorId,
  disableFocusTrap = false,
  hasNoBodyWrapper = false,
  ...props
}: ModalContentProps) => {
  if (!isOpen) {
    return null;
  }

  const modalBoxHeader = header ? (
    <ModalBoxHeader>{header}</ModalBoxHeader>
  ) : (
    title && (
      <ModalBoxHeader>
        {
          <h1 id={labelId} className={css(modalStyles.modalBoxTitle)}>
            {title}
          </h1>
        }
        {description && <ModalBoxDescription id={descriptorId}>{description}</ModalBoxDescription>}
      </ModalBoxHeader>
    )
  );

  const modalBoxFooter = footer ? (
    <ModalBoxFooter>{footer}</ModalBoxFooter>
  ) : (
    actions.length > 0 && <ModalBoxFooter>{actions}</ModalBoxFooter>
  );

  const modalBody = hasNoBodyWrapper ? (
    children
  ) : (
    <ModalBoxBody {...props} {...(!description && !ariaDescribedby && { id: descriptorId })}>
      {children}
    </ModalBoxBody>
  );
  const boxStyle = width === -1 ? {} : { width };
  const ariaLabelledbyFormatted = (): null | string => {
    if (ariaLabelledby === null) {
      return null;
    }
    const idRefList: string[] = [];
    if ((ariaLabel && boxId) !== '') {
      idRefList.push(ariaLabel && boxId);
    }
    if (ariaLabelledby) {
      idRefList.push(ariaLabelledby);
    }
    if (title) {
      idRefList.push(labelId);
    }
    return idRefList.join(' ');
  };

  const modalBox = (
    <ModalBox
      id={boxId}
      style={boxStyle}
      className={className}
      variant={variant}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledbyFormatted()}
      aria-describedby={ariaDescribedby || (hasNoBodyWrapper ? null : descriptorId)}
    >
      {showClose && <ModalBoxCloseButton onClose={onClose} />}
      {modalBoxHeader}
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
