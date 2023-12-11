import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/ModalBox/modal-box';

export interface ModalBoxBodyProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside the modal box body. */
  children?: React.ReactNode;
  /** Additional classes added to the modal box body. */
  className?: string;
  /** Accessible label applied to the modal box body. This should be used to communicate
   * important information about the modal box body div element if needed, such as when it is scrollable.
   */
  'aria-label'?: string;
  /** Accessible role applied to the modal box body. This will default to "region" if the
   * aria-label property is passed in. Set to a more appropriate role as applicable
   * based on the modal content and context.
   */
  role?: string;
}

export const ModalBoxBody: React.FunctionComponent<ModalBoxBodyProps> = ({
  children,
  className,
  'aria-label': ariaLabel,
  role,
  ...props
}: ModalBoxBodyProps) => {
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
ModalBoxBody.displayName = 'ModalBoxBody';
