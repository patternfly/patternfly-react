import { ReactNode, FunctionComponent } from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/ModalBox/modal-box';

export interface ModalBoxDescriptionProps {
  /** Content rendered inside the description. */
  children?: ReactNode;
  /** Additional classes added to the description. */
  className?: string;
  /** Id of the description. */
  id?: string;
}

export const ModalBoxDescription: FunctionComponent<ModalBoxDescriptionProps> = ({
  children = null,
  className = '',
  id = '',
  ...props
}: ModalBoxDescriptionProps) => (
  <div {...props} id={id} className={css(styles.modalBoxDescription, className)}>
    {children}
  </div>
);
ModalBoxDescription.displayName = 'ModalBoxDescription';
