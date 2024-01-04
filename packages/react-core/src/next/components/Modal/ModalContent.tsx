import * as React from 'react';
import { FocusTrap } from '../../../helpers';
import bullsEyeStyles from '@patternfly/react-styles/css/layouts/Bullseye/bullseye';
import { css } from '@patternfly/react-styles';
import { getOUIAProps, OUIAProps } from '../../../helpers';
import { Backdrop } from '../../../components/Backdrop';
import { ModalBoxCloseButton } from './ModalBoxCloseButton';
import { ModalBox } from './ModalBox';

export interface ModalContentProps extends OUIAProps {
  /** Id to use for the modal box description. This should match the ModalHeader labelId or descriptorId. */
  'aria-describedby'?: string;
  /** Accessible descriptor of the modal. */
  'aria-label'?: string;
  /** Id to use for the modal box label. This should include the ModalHeader labelId. */
  'aria-labelledby'?: string;
  /** Id of the modal box container. */
  boxId: string;
  /** Content rendered inside the modal. */
  children: React.ReactNode;
  /** Additional classes added to the modal box. */
  className?: string;
  /** Flag to disable focus trap. */
  disableFocusTrap?: boolean;
  /** The element to focus when the modal opens. By default the first
   * focusable element will receive focus.
   */
  elementToFocus?: HTMLElement | SVGElement | string;
  /** Flag to show the modal. */
  isOpen?: boolean;
  /** A callback for when the close button is clicked. */
  onClose?: (event: KeyboardEvent | React.MouseEvent) => void;
  /** Position of the modal. By default a modal will be positioned vertically and horizontally centered. */
  position?: 'default' | 'top';
  /** Offset from alternate position. Can be any valid CSS length/percentage. */
  positionOffset?: string;
  /** Variant of the modal. */
  variant?: 'small' | 'medium' | 'large' | 'default';
  /** Default width of the modal. */
  width?: number | string;
  /** Maximum width of the modal. */
  maxWidth?: number | string;
  /** Value to overwrite the randomly generated data-ouia-component-id.*/
  ouiaId?: number | string;
  /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
  ouiaSafe?: boolean;
}

export const ModalContent: React.FunctionComponent<ModalContentProps> = ({
  children,
  className,
  isOpen = false,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedby,
  'aria-labelledby': ariaLabelledby,
  onClose,
  variant = 'default',
  position,
  positionOffset,
  width,
  maxWidth,
  boxId,
  disableFocusTrap = false,
  ouiaId,
  ouiaSafe = true,
  elementToFocus,
  ...props
}: ModalContentProps) => {
  if (!isOpen) {
    return null;
  }

  const ariaLabelledbyFormatted = (): string => {
    const idRefList: string[] = [];
    if (ariaLabel && boxId) {
      idRefList.push(ariaLabel && boxId);
    }
    if (ariaLabelledby) {
      idRefList.push(ariaLabelledby);
    }
    if (idRefList.length === 0) {
      return undefined;
    } else {
      return idRefList.join(' ');
    }
  };

  const modalBox = (
    <ModalBox
      className={css(className)}
      variant={variant}
      position={position}
      positionOffset={positionOffset}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledbyFormatted()}
      aria-describedby={ariaDescribedby}
      {...getOUIAProps(ModalContent.displayName, ouiaId, ouiaSafe)}
      style={
        {
          ...(width && { '--pf-v5-c-modal-box--Width': typeof width !== 'number' ? width : `${width}px` }),
          ...(maxWidth && {
            '--pf-v5-c-modal-box--MaxWidth': typeof maxWidth !== 'number' ? maxWidth : `${maxWidth}px`
          })
        } as React.CSSProperties
      }
      {...props}
      id={boxId}
    >
      {onClose && <ModalBoxCloseButton onClose={(event) => onClose(event)} ouiaId={ouiaId} />}
      {children}
    </ModalBox>
  );
  return (
    <Backdrop>
      <FocusTrap
        active={!disableFocusTrap}
        focusTrapOptions={{
          clickOutsideDeactivates: true,
          tabbableOptions: { displayCheck: 'none' },
          // FocusTrap's initialFocus can accept false as a value to prevent initial focus.
          // We want to prevent this in case false is ever passed in.
          initialFocus: elementToFocus || undefined
        }}
        className={css(bullsEyeStyles.bullseye)}
      >
        {modalBox}
      </FocusTrap>
    </Backdrop>
  );
};
ModalContent.displayName = 'ModalContent';
