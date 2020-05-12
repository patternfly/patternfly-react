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
  /** Id to use for Modal Box label */
  'aria-labelledby'?: string;
  /** Accessible descriptor of modal */
  'aria-label'?: string;
  /** Id to use for Modal Box description */
  'aria-describedby': string;
}

export const ModalBox: React.FunctionComponent<ModalBoxProps> = ({
  children,
  className = '',
  variant = 'default',
  'aria-labelledby': ariaLabelledby,
  'aria-label': ariaLabel = '',
  'aria-describedby': ariaDescribedby,
  ...props
}: ModalBoxProps) => (
  <div
    {...props}
    role="dialog"
    aria-label={ariaLabel || null}
    aria-labelledby={ariaLabelledby || null}
    aria-describedby={ariaDescribedby}
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
