import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/ModalBox/modal-box';

/** Renders content in the body of the modal */

export interface ModalBodyProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside the modal body. */
  children?: React.ReactNode;
  /** Additional classes added to the modal body. */
  className?: string;
  /** Accessible label applied to the modal body. This should be used to communicate
   * important information about the modal body div element if needed, such as when it is scrollable.
   */
  'aria-label'?: string;
  /** Accessible role applied to the modal body. This will default to "region" if the
   * aria-label property is passed in. Set to a more appropriate role as applicable
   * based on the modal content and context.
   */
  role?: string;
}

export const ModalBody: React.FunctionComponent<ModalBodyProps> = ({
  children,
  className,
  'aria-label': ariaLabel,
  role,
  ...props
}: ModalBodyProps) => {
  const defaultModalBodyRole = ariaLabel ? 'region' : undefined;
  return (
    <div
      aria-label={ariaLabel}
      role={role || defaultModalBodyRole}
      className={css(styles.modalBoxBody, className)}
      {...props}
    >
      {children}
    </div>
  );
};
ModalBody.displayName = 'ModalBody';
