import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/ModalBox/modal-box';

export interface ModalBoxProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside the ModalBox. */
  children: React.ReactNode;
  /** Additional classes added to the ModalBox */
  className?: string;
  /** Variant of the modal */
  variant?: 'small' | 'large' | 'default';
  /** String to use for Modal Box aria-label */
  title: string;
  /** Id to use for Modal Box description */
  id: string;
}

export const ModalBox: React.FunctionComponent<ModalBoxProps> = ({
  children,
  className = '',
  variant = 'default',
  title,
  id,
  ...props
}: ModalBoxProps) => (
  <div
    {...props}
    role="dialog"
    aria-label={title}
    aria-describedby={id}
    aria-modal="true"
    className={css(
      styles.modalBox,
      className,
      variant === 'large' && styles.modifiers.lg,
      variant === 'small' && styles.modifiers.sm
    )}
  >
    {children}
  </div>
);
