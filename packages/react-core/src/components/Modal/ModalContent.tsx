import * as React from 'react';
import { FocusTrap } from '../../helpers';
import modalStyles from '@patternfly/react-styles/css/components/ModalBox/modal-box';
import bullsEyeStyles from '@patternfly/react-styles/css/layouts/Bullseye/bullseye';
import { css } from '@patternfly/react-styles';
import { getOUIAProps, OUIAProps } from '../../helpers';

import { Backdrop } from '../Backdrop/Backdrop';
import { ModalBoxBody } from './ModalBoxBody';
import { ModalBoxCloseButton } from './ModalBoxCloseButton';
import { ModalBox } from './ModalBox';
import { ModalBoxFooter } from './ModalBoxFooter';
import { ModalBoxDescription } from './ModalBoxDescription';
import { ModalBoxHeader } from './ModalBoxHeader';
import { ModalBoxTitle, isVariantIcon } from './ModalBoxTitle';

export interface ModalContentProps extends OUIAProps {
  /** Action buttons to add to the standard modal footer. Ignored if the footer property
   * is passed in.
   */
  actions?: any;
  /** Id to use for the modal box descriptor. */
  'aria-describedby'?: string;
  /** Accessible descriptor of the modal. */
  'aria-label'?: string;
  /** Id to use for the modal box label. */
  'aria-labelledby'?: string | null;
  /** Accessible label applied to the modal box body. This should be used to communicate
   * important information about the modal box body div element if needed, such as that it
   * is scrollable.
   */
  bodyAriaLabel?: string;
  /** Accessible role applied to the modal box body. This will default to "region" if the
   * bodyAriaLabel property is passed in. Set to a more appropriate role as applicable
   * based on the modal content and context.
   */
  bodyAriaRole?: string;
  /** Id of the modal box container. */
  boxId: string;
  /** Content rendered inside the modal. */
  children: React.ReactNode;
  /** Additional classes added to the modal box. */
  className?: string;
  /** Description of the modal. */
  description?: React.ReactNode;
  /** Id of the modal box description. */
  descriptorId: string;
  /** Flag to disable focus trap. */
  disableFocusTrap?: boolean;
  /** Custom footer. */
  footer?: React.ReactNode;
  /** Flag indicating if modal content should be placed in a modal box body wrapper. */
  hasNoBodyWrapper?: boolean;
  /** Complex header (more than just text), supersedes the title property for header content. */
  header?: React.ReactNode;
  /** Optional help section for the modal header. */
  help?: React.ReactNode;
  /** Flag to show the modal. */
  isOpen?: boolean;
  /** Id of the modal box title. */
  labelId: string;
  /** A callback for when the close button is clicked. */
  onClose?: () => void;
  /** Alternate position of the modal. */
  position?: 'top';
  /** Offset from alternate position. Can be any valid CSS length/percentage. */
  positionOffset?: string;
  /** Flag to show the close button in the header area of the modal. */
  showClose?: boolean;
  /** Simple text content of the modal header. Also used for the aria-label on the body. */
  title?: string;
  /** Optional alert icon (or other) to show before the title of the modal header. When the
   * predefined alert types are used the default styling will be automatically applied.
   */
  titleIconVariant?: 'success' | 'danger' | 'warning' | 'info' | 'default' | React.ComponentType<any>;
  /** Optional title label text for screen readers. */
  titleLabel?: string;
  /** Variant of the modal. */
  variant?: 'small' | 'medium' | 'large' | 'default';
  /** Default width of the modal. */
  width?: number | string;
  /** Value to overwrite the randomly generated data-ouia-component-id.*/
  ouiaId?: number | string;
  /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
  ouiaSafe?: boolean;
}

export const ModalContent: React.FunctionComponent<ModalContentProps> = ({
  children,
  className = '',
  isOpen = false,
  header = null,
  help = null,
  description = null,
  title = '',
  titleIconVariant = null,
  titleLabel = '',
  'aria-label': ariaLabel = '',
  'aria-describedby': ariaDescribedby,
  'aria-labelledby': ariaLabelledby,
  bodyAriaLabel,
  bodyAriaRole,
  showClose = true,
  footer = null,
  actions = [],
  onClose = () => undefined as any,
  variant = 'default',
  position,
  positionOffset,
  width = -1,
  boxId,
  labelId,
  descriptorId,
  disableFocusTrap = false,
  hasNoBodyWrapper = false,
  ouiaId,
  ouiaSafe = true,
  ...props
}: ModalContentProps) => {
  if (!isOpen) {
    return null;
  }

  const modalBoxHeader = header ? (
    <ModalBoxHeader help={help}>{header}</ModalBoxHeader>
  ) : (
    title && (
      <ModalBoxHeader help={help}>
        <ModalBoxTitle title={title} titleIconVariant={titleIconVariant} titleLabel={titleLabel} id={labelId} />
        {description && <ModalBoxDescription id={descriptorId}>{description}</ModalBoxDescription>}
      </ModalBoxHeader>
    )
  );

  const modalBoxFooter = footer ? (
    <ModalBoxFooter>{footer}</ModalBoxFooter>
  ) : (
    actions.length > 0 && <ModalBoxFooter>{actions}</ModalBoxFooter>
  );

  const defaultModalBodyAriaRole = bodyAriaLabel ? 'region' : undefined;

  const modalBody = hasNoBodyWrapper ? (
    children
  ) : (
    <ModalBoxBody
      aria-label={bodyAriaLabel}
      role={bodyAriaRole || defaultModalBodyAriaRole}
      {...props}
      {...(!description && !ariaDescribedby && { id: descriptorId })}
    >
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
      className={css(
        className,
        isVariantIcon(titleIconVariant) &&
          modalStyles.modifiers[titleIconVariant as 'success' | 'warning' | 'info' | 'danger' | 'default']
      )}
      variant={variant}
      position={position}
      positionOffset={positionOffset}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledbyFormatted()}
      aria-describedby={ariaDescribedby || (hasNoBodyWrapper ? null : descriptorId)}
      {...getOUIAProps(ModalContent.displayName, ouiaId, ouiaSafe)}
    >
      {showClose && <ModalBoxCloseButton onClose={onClose} ouiaId={ouiaId} />}
      {modalBoxHeader}
      {modalBody}
      {modalBoxFooter}
    </ModalBox>
  );
  return (
    <Backdrop>
      <FocusTrap
        active={!disableFocusTrap}
        focusTrapOptions={{ clickOutsideDeactivates: true, tabbableOptions: { displayCheck: 'none' } }}
        className={css(bullsEyeStyles.bullseye)}
      >
        {modalBox}
      </FocusTrap>
    </Backdrop>
  );
};
ModalContent.displayName = 'ModalContent';
