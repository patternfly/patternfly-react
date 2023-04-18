import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/ModalBox/modal-box';
import { Button } from '../Button';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';
import { OUIAProps } from '../../helpers';

export interface ModalBoxCloseButtonProps extends OUIAProps {
  /** Additional classes added to the close button. */
  className?: string;
  /** A callback for when the close button is clicked. */
  onClose?: (event: KeyboardEvent | React.MouseEvent) => void;
  /** Value to set the data-ouia-component-id.*/
  ouiaId?: number | string;
}

export const ModalBoxCloseButton: React.FunctionComponent<ModalBoxCloseButtonProps> = ({
  className,
  onClose = () => undefined as any,
  ouiaId,
  ...props
}: ModalBoxCloseButtonProps) => (
  <div className={css(styles.modalBoxClose, className)}>
    <Button
      variant="plain"
      onClick={(event) => onClose(event)}
      aria-label="Close"
      {...(ouiaId && { ouiaId: `${ouiaId}-${ModalBoxCloseButton.displayName}` })}
      {...props}
    >
      <TimesIcon />
    </Button>
  </div>
);
ModalBoxCloseButton.displayName = 'ModalBoxCloseButton';
