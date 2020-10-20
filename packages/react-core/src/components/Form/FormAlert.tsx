import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Form/form';
import { css } from '@patternfly/react-styles';

export interface FormAlertProps extends React.HTMLProps<HTMLDivElement> {
  /** An inline PatternFly Alert. */
  children?: React.ReactNode;
  /** Additional classes added to the FormGroup. */
  className?: string;
}

export const FormAlert: React.FunctionComponent<FormAlertProps> = ({
  children = null,
  className = '',
  ...props
}: FormAlertProps) => (
  <div {...props} className={css(styles.formAlert, className)}>
    {children}
  </div>
);
FormAlert.displayName = 'FormAlert';
