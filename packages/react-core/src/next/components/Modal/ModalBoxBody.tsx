import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/ModalBox/modal-box';

export interface ModalBoxBodyProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside the modal box body. */
  children?: React.ReactNode;
  /** Additional classes added to the modal box body. */
  className?: string;
  /** Accessible label applied to the modal box body. This should be used to communicate
   * important information about the modal box body div element if needed, such as that it
   * is scrollable.
   */
  'aria-label'?: string;
  /** Accessible role applied to the modal box body. This will default to "region" if the
   * bodyAriaLabel property is passed in. Set to a more appropriate role as applicable
   * based on the modal content and context.
   */
  'aria-role'?: string;
  /** Id of the modal box body. This should mathc hte modal box header descriptorId????? */
  id?: string;
}

export const ModalBoxBody: React.FunctionComponent<ModalBoxBodyProps> = ({
  children,
  className,
  'aria-label': ariaLabel,
  'aria-role': ariaRole,
  id,
  ...props
}: ModalBoxBodyProps) => {
  const defaultModalBodyAriaRole = ariaLabel ? 'region' : undefined;
  return (
    <div
      aria-label={ariaLabel}
      role={ariaRole || defaultModalBodyAriaRole}
      className={css(styles.modalBoxBody, className)}
      id={id}
      {...props}
    >
      {children}
    </div>
  );
};
ModalBoxBody.displayName = 'ModalBoxBody';
